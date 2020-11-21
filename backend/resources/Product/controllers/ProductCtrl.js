/**
 * Created by Piyush on Sat Nov 21 2020 17:22:19 GMT+0530 (India Standard Time)
 * for adding product
 * Updated by Piyush on Sat Nov 21 2020 17:22:19 GMT+0530 (India Standard Time)
 * for adding product
 */

var Product = require("../model/Product");
var Category = require("../../Category/model/Category")
var Sizing = require("../../Sizing/model/Sizing")
function ProductCtrl() {
  /**
   * Created by Piyush on Sat Nov 21 2020 17:22:19 GMT+0530 (India Standard Time)
   * for adding product
   * Updated by Piyush on Sat Nov 21 2020 17:22:19 GMT+0530 (India Standard Time)
   * for adding product
   */

  this.addOrUpdateProduct = function (req, res, next) {
    try {
      async.waterfall(
        [
          function validation(callback) {
            if (req.body && req.body.productName && req.body.stock && req.body.price
                && req.body.description && req.body.sizeId && req.body.categoryId) {
              callback(null, req.body);
            } else {
              callback(603);
            }
          },
          function checkForCategoryAndSizing(data, callback){
              async.parallel({
                  checkCategory : function (innerCallback) {
                      Category.findOne({categoryId : data.categoryId, isDeleted : false}, function (err, result) {
                          if(err){
                              innerCallback(err);
                          } else if(!result){
                              innerCallback(500);
                          } else {
                              innerCallback(null, result);
                          }
                      }).lean();
                  },
                  checkSizing : function (innerCallback) {
                    Sizing.findOne({sizeId : data.sizeId, isDeleted : false}, function (err, result) {
                        if(err){
                            innerCallback(err);
                        } else if(!result){
                            innerCallback(500);
                        } else {
                            innerCallback(null, result);
                        }
                    }).lean();
                  }
              }, function (err, doc) {
                  if(err){
                      callback(err);
                  } else {
                      callback(null, data);
                  }
              })
          },
          function createQuery(data, callback) {
            let params = {
              query: {},
              update: {},
              option: { new: true },
            };
            if (data.productId) {
              params.option.upsert = false;
            } else {
              params.option.upsert = true;
              data.productId = "product" + Date.now();
            }
            params.query.productId = data.productId;
            data.isDeleted = false;
            params.update = data;
            callback(null, params);
          },
          function saveintoDatabase(params, callback) {
            Product.findOneAndUpdate(
              params.query,
              params.update,
              params.option,
              function (err, result) {
                if (err) {
                  callback(err);
                } else if (!result) {
                  callback(500);
                } else {
                  callback(null, result);
                }
              }
            );
          },
        ],
        function (err, doc) {
          if (err) {
            ResponseWrapper.FailedResponse(err, res);
          } else {
            ResponseWrapper.SuccessResponse(
              200,
              res,
              doc,
              "addOrUpdateProduct"
            );
          }
        }
      );
    } catch (error) {
      ResponseWrapper.FailedResponse(error, res);
    }
  };

  this.getAllProducts = function (req, res, next) {
    try {
      async.waterfall([
        function getAllProducts(callback) {
            Product.find({isDeleted : false}, function (err, result) {
                if(err){
                    callback(err);
                } else if(result.length === 0){
                    callback(500);
                } else {
                    callback(null, result);
                }
            }).lean()
        },
        function checkForCategoryAndSizing(data, callback){
            async.parallel({
                categoryData : function (innerCallback) {
                    Category.find({ isDeleted : false}, function (err, result) {
                        if(err){
                            innerCallback(err);
                        } else if(!result){
                            innerCallback(500);
                        } else {
                            let json = {};
                            result.forEach(function(element){
                                json[element.categoryId] = element.category;
                            })
                            innerCallback(null, json);
                        }
                    }).lean();
                },
                sizingData : function (innerCallback) {
                  Sizing.find({ isDeleted : false}, function (err, result) {
                      if(err){
                          innerCallback(err);
                      } else if(!result){
                          innerCallback(500);
                      } else {
                        let json = {};
                        result.forEach(function(element){
                            json[element.sizeId] = element.size;
                        })
                          innerCallback(null, json);
                      }
                  }).lean();
                }
            }, function (err, doc) {
                if(err){
                    callback(err);
                } else {
                    callback(null, data, doc);
                }
            })
        },
        function mergeObjects(productData, otherData, callback) {
            var updatedProductData = [];
            productData.forEach(function (item) {
               
                let obj = {...item,
                     ...{ category : otherData.categoryData[item.categoryId]},
                    ...{ size: otherData.sizingData[item.sizeId]}};
                    updatedProductData.push(obj);
            });
            callback(null, updatedProductData);
        }
      ], function (err, doc) {
        if (err) {
          ResponseWrapper.FailedResponse(err, res);
        } else {
          ResponseWrapper.SuccessResponse(200, res, doc, "getAllProducts");
        }
      });
    } catch (error) {
      ResponseWrapper.FailedResponse(error, res);
    }
  };

  this.deleteProduct = function (req, res, next) {
      try {
      async.waterfall([
        function validation(callback){
            if(req.body && req.body.productId){
                callback(null, req.body);
            } else {
                callback(603)
            }
        },
        function updateInDatabase(data, callback) {
            var query = {
                productId : data.productId
            }, update = {
                isDeleted : true
            }, option = {
                upsert : false,
                new: true
            };
            Product.findOneAndUpdate(query, update, option, function (err, result) {
                if(err){
                    callback(err);
                } else if(!result){
                    callback(500);
                } else {
                    callback(null, result);
                }
            })

        }
      ], function (err, doc) {
       if (err) {
       ResponseWrapper.FailedResponse(err, res)
      } else {
      ResponseWrapper.SuccessResponse(200, res, doc, 'deleteProduct');
      }
         })
      } catch (error) {
      ResponseWrapper.FailedResponse(error, res)
       };
  }
}
module.exports = new ProductCtrl();
