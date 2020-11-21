/**
 * Created by Piyush on Sat Nov 21 2020 17:22:19 GMT+0530 (India Standard Time)
 * for adding category
 * Updated by Piyush on Sat Nov 21 2020 17:22:19 GMT+0530 (India Standard Time)
 * for adding category
 */


var CategoryCtrl = require('./controllers/CategoryCtrl');

module.exports = function (app) {
  /**
 * Created by Piyush on Sat Nov 21 2020 17:22:19 GMT+0530 (India Standard Time)
 * for adding category
 * Updated by Piyush on Sat Nov 21 2020 17:22:19 GMT+0530 (India Standard Time)
 * for adding category
 */

  app.post('/v1/addOrUpdateCategory', CategoryCtrl.addOrUpdateCategory);
  app.post('/v1/deleteCategory', CategoryCtrl.deleteCategory);
  app.get('/v1/getAllCategories', CategoryCtrl.getAllCategories);
}
