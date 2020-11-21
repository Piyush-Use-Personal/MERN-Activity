/**
 * Created by Piyush on Sat Nov 21 2020 17:22:35 GMT+0530 (India Standard Time)
 * for adding sizing
 * Updated by Piyush on Sat Nov 21 2020 17:22:35 GMT+0530 (India Standard Time)
 * for adding sizing
 */


var SizingCtrl = require('./controllers/SizingCtrl');

module.exports = function (app) {
  /**
 * Created by Piyush on Sat Nov 21 2020 17:22:35 GMT+0530 (India Standard Time)
 * for adding sizing
 * Updated by Piyush on Sat Nov 21 2020 17:22:35 GMT+0530 (India Standard Time)
 * for adding sizing
 */

app.post('/v1/addOrUpdateSizing', SizingCtrl.addOrUpdateSizing);
app.post('/v1/deleteSizing', SizingCtrl.deleteSizing);
app.get('/v1/getAllSizes', SizingCtrl.getAllSizes);
}
