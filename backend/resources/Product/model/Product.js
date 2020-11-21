/**
 * Created by Piyush on Sat Nov 21 2020 17:22:22 GMT+0530 (India Standard Time)
 * for adding product
 * Updated by Piyush on Sat Nov 21 2020 17:22:22 GMT+0530 (India Standard Time)
 * for adding product
 */


module.exports = (function ProductSchema () {
    var Schema = mongoose.Schema;
  
    var ProductSchema = new Schema({
      productId: { type: String, trim: true, required: true },
      categoryId: { type: String, trim: true, required: true },
      sizeId: { type: String, trim: true, required: true },
      productName: { type: String, trim: true, required: true },
      price: { type: Number, trim: true, required: true },
      stock: { type: String, trim: true, required: true },
      description: { type: String, trim: true, required: true },
      isDeleted : {type: Boolean}
    });
  
    var Product = mongoose.model('Product', ProductSchema);
  
    return Product;
  })();
  