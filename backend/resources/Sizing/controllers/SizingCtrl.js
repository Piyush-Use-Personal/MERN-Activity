/**
 * Created by Piyush on Sat Nov 21 2020 17:22:19 GMT+0530 (India Standard Time)
 * for adding size
 * Updated by Piyush on Sat Nov 21 2020 17:22:19 GMT+0530 (India Standard Time)
 * for adding size
 */

var Sizing = require("../model/Sizing");
function SizingCtrl() {
  /**
   * Created by Piyush on Sat Nov 21 2020 17:22:19 GMT+0530 (India Standard Time)
   * for adding size
   * Updated by Piyush on Sat Nov 21 2020 17:22:19 GMT+0530 (India Standard Time)
   * for adding size
   */

  this.addOrUpdateSizing = function (req, res, next) {
    try {
      async.waterfall(
        [
          function validation(callback) {
            if (req.body && req.body.size) {
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
            if (data.sizeId) {
              params.option.upsert = false;
            } else {
              params.option.upsert = true;
              data.sizeId = "size" + Date.now();
            }
            params.query.sizeId = data.sizeId;
            data.isDeleted = false;
            params.update = data;
            callback(null, params);
          },
          function saveintoDatabase(params, callback) {
            Sizing.findOneAndUpdate(
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
              "addOrUpdateSizing"
            );
          }
        }
      );
    } catch (error) {
      ResponseWrapper.FailedResponse(error, res);
    }
  };

  this.getAllSizes = function (req, res, next) {
    try {
      async.waterfall([
        function getAllSizes(callback) {
            Sizing.find({isDeleted : false}, function (err, result) {
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
          ResponseWrapper.SuccessResponse(200, res, doc, "getAllSizes");
        }
      });
    } catch (error) {
      ResponseWrapper.FailedResponse(error, res);
    }
  };

  this.deleteSizing = function (req, res, next) {
      try {
      async.waterfall([
        function validation(callback){
            if(req.body && req.body.sizeId){
                callback(null, req.body);
            } else {
                callback(603)
            }
        },
        function updateInDatabase(data, callback) {
            var query = {
                sizeId : data.sizeId
            }, update = {
                isDeleted : true
            }, option = {
                upsert : false,
                new: true
            };
            Sizing.findOneAndUpdate(query, update, option, function (err, result) {
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
      ResponseWrapper.SuccessResponse(200, res, doc, 'deleteSizing');
      }
         })
      } catch (error) {
      ResponseWrapper.FailedResponse(error, res)
       };
  }
}
module.exports = new SizingCtrl();
