/**
 * Created by Piyush on Sun Nov 22 2020 20:22:48 GMT+0530 (India Standard Time)
 * User Management
 * Updated by Piyush on Sun Nov 22 2020 20:22:48 GMT+0530 (India Standard Time)
 * User Management
 */


var DemoUserCtrl = require('./controllers/DemoUserCtrl');

module.exports = function (app) {
  /**
 * Created by Piyush on Sun Nov 22 2020 20:22:48 GMT+0530 (India Standard Time)
 * User Management
 * Updated by Piyush on Sun Nov 22 2020 20:22:48 GMT+0530 (India Standard Time)
 * User Management
 */

  app.post('/v1/addOrUpdateUser', DemoUserCtrl.addOrUpdateUser);
  app.get('/v1/getAllUser', DemoUserCtrl.getAllUser);
  app.post('/v1/deleteUser', DemoUserCtrl.deleteUser);
  app.post('/v1/checkPassword', DemoUserCtrl.checkPassword);
}
