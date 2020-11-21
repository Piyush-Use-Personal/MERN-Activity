/**
 * Created by Piyush on Sat Nov 21 2020 17:22:22 GMT+0530 (India Standard Time)
 * for adding product
 * Updated by Piyush on Sat Nov 21 2020 17:22:22 GMT+0530 (India Standard Time)
 * for adding product
 */


var ProductCtrl = require('./controllers/ProductCtrl');

module.exports = function (app) {
  /**
 * Created by Piyush on Sat Nov 21 2020 17:22:22 GMT+0530 (India Standard Time)
 * for adding product
 * Updated by Piyush on Sat Nov 21 2020 17:22:22 GMT+0530 (India Standard Time)
 * for adding product
 */

app.post('/v1/addOrUpdateProduct', ProductCtrl.addOrUpdateProduct);
app.get('/v1/getAllProducts', ProductCtrl.getAllProducts);
app.post('/v1/deleteProduct', ProductCtrl.deleteProduct);
}
