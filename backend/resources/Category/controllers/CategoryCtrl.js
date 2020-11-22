/**
 * Created by Piyush on Sat Nov 21 2020 17:22:19 GMT+0530 (India Standard Time)
 * for adding category
 * Updated by Piyush on Sat Nov 21 2020 17:22:19 GMT+0530 (India Standard Time)
 * for adding category
 */

var Category = require("../model/Category");
function CategoryCtrl() {
  /**
   * Created by Piyush on Sat Nov 21 2020 17:22:19 GMT+0530 (India Standard Time)
   * for adding category
   * Updated by Piyush on Sat Nov 21 2020 17:22:19 GMT+0530 (India Standard Time)
   * for adding category
   */

  this.addOrUpdateCategory = function (req, res, next) {
    try {
      async.waterfall(
        [
          function validation(callback) {
            if (req.body && req.body.category) {
              callback(null, req.body);
            } else {
              callback(603);
            }
          },
          function createQuery(data, callback) {
            let params = {
              query: {},
              update: {},
              option: { new: true },
            };
            if (data.categoryId) {
              params.option.upsert = false;
            } else {
              params.option.upsert = true;
              data.categoryId = "category" + Date.now();
            }
            params.query.categoryId = data.categoryId;
            data.isDeleted = false;
            params.update = data;
            callback(null, params);
          },
          function saveintoDatabase(params, callback) {
            Category.findOneAndUpdate(
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
              "addOrUpdateCategory"
            );
          }
        }
      );
    } catch (error) {
      ResponseWrapper.FailedResponse(error, res);
    }
  };

  this.getAllCategories = function (req, res, next) {
    try {
      async.waterfall([
        function getAllCategories(callback) {
            Category.find({isDeleted : false} ,{_id: 0, __v : 0, isDeleted: 0}, function (err, result) {
                if(err){
                    callback(err);
                } else if(result.length === 0){
                    callback(500);
                } else {
                    callback(null, result);
                }
            })
        }
      ], function (err, doc) {
        if (err) {
          ResponseWrapper.FailedResponse(err, res);
        } else {
          ResponseWrapper.SuccessResponse(200, res, doc, "getAllCategories");
        }
      });
    } catch (error) {
      ResponseWrapper.FailedResponse(error, res);
    }
  };

  this.deleteCategory = function (req, res, next) {
      try {
      async.waterfall([
        function validation(callback){
            if(req.body && req.body.categoryId){
                callback(null, req.body);
            } else {
                callback(603)
            }
        },
        function updateInDatabase(data, callback) {
            var query = {
                categoryId : data.categoryId
            }, update = {
                isDeleted : true
            }, option = {
                upsert : false,
                new: true
            };
            Category.findOneAndUpdate(query, update, option, function (err, result) {
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
      ResponseWrapper.SuccessResponse(200, res, doc, 'deleteCategory');
      }
         })
      } catch (error) {
      ResponseWrapper.FailedResponse(error, res)
       };
  }
}
module.exports = new CategoryCtrl();
