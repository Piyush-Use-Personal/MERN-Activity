/**
 * Created by Piyush on Sat Nov 21 2020 17:22:19 GMT+0530 (India Standard Time)
 * for adding user
 * Updated by Piyush on Sat Nov 21 2020 17:22:19 GMT+0530 (India Standard Time)
 * for adding user
 */

const EncryptionWrapper = require("../../../utils/EncryptionWrapper");
var User = require("../model/DemoUser");
function UserCtrl() {
  /**
   * Created by Piyush on Sat Nov 21 2020 17:22:19 GMT+0530 (India Standard Time)
   * for adding user
   * Updated by Piyush on Sat Nov 21 2020 17:22:19 GMT+0530 (India Standard Time)
   * for adding user
   */

  this.addOrUpdateUser = function (req, res, next) {
    try {
      async.waterfall(
        [
          function validation(callback) {
            if (
              req.body &&
              req.body.emailId &&
              req.body.fullName &&
              req.body.password
            ) {
              callback(null, req.body);
            } else {
              callback(603);
            }
          },
          function checkUserExist(data, callback) {
              let query = {emailId : data.emailId};
              User.findOne(query, function (err, result) {
                  if(err){
                      callback(err);
                  } else if(!result){
                      callback(null, data);
                  } else {
                      callback(708);
                  }
              })
          },
          function createQuery(data, callback) {
            let params = {
              query: {},
              update: {},
              option: { new: true },
            };
            if (data.userId) {
              params.option.upsert = false;
            } else {
              params.option.upsert = true;
              data.userId = "user" + Date.now();
            }
            params.query.userId = data.userId;
            data.isDeleted = false;
            params.update = data;
            params.update.password = EncryptionWrapper.encrypt(params.update.password);
            console.log(params.update.password)
            callback(null, params);
          },
          function saveintoDatabase(params, callback) {
            User.findOneAndUpdate(
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
            ResponseWrapper.SuccessResponse(200, res, doc, "addOrUpdateUser");
          }
        }
      );
    } catch (error) {
      ResponseWrapper.FailedResponse(error, res);
    }
  };

  this.getAllUser = function (req, res, next) {
    try {
      async.waterfall(
        [
          function getAllUser(callback) {
            User.find(
              { isDeleted: false },
              { _id: 0, __v: 0, isDeleted: 0 },
              function (err, result) {
                if (err) {
                  callback(err);
                } else if (result.length === 0) {
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
            ResponseWrapper.SuccessResponse(200, res, doc, "getAllUser");
          }
        }
      );
    } catch (error) {
      ResponseWrapper.FailedResponse(error, res);
    }
  };

  this.deleteUser = function (req, res, next) {
    try {
      async.waterfall(
        [
          function validation(callback) {
            if (req.body && req.body.userId) {
              callback(null, req.body);
            } else {
              callback(603);
            }
          },
          function updateInDatabase(data, callback) {
            var query = {
                userId: data.userId,
              },
              update = {
                isDeleted: true,
              },
              option = {
                upsert: false,
                new: true,
              };
            User.findOneAndUpdate(
              query,
              update,
              option,
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
            ResponseWrapper.SuccessResponse(200, res, doc, "deleteUser");
          }
        }
      );
    } catch (error) {
      ResponseWrapper.FailedResponse(error, res);
    }
  };

  this.checkPassword = function (req, res, next) {
    try {
      async.waterfall([
          function validation(callback) {
              if(req.body && req.body.emailId && req.body.password){
                  callback(null, req.body);
              } else {
                  callback(603)
              }
          },
          function checkPassword(data, callback) {
              var query = {
                  emailId : data.emailId,
                  password : EncryptionWrapper.encrypt(data.password)
              };
              User.findOne(query, function (err, result) {
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
          ResponseWrapper.FailedResponse(err, res);
        } else {
          ResponseWrapper.SuccessResponse(200, res, doc, "checkPassword");
        }
      });
    } catch (error) {
      ResponseWrapper.FailedResponse(error, res);
    }
  };
}
module.exports = new UserCtrl();
