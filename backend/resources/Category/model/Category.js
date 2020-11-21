/**
 * Created by Piyush on Sat Nov 21 2020 17:22:19 GMT+0530 (India Standard Time)
 * for adding category
 * Updated by Piyush on Sat Nov 21 2020 17:22:19 GMT+0530 (India Standard Time)
 * for adding category
 */


module.exports = (function CategorySchema () {
    var Schema = mongoose.Schema;
  
    var CategorySchema = new Schema({
      categoryId: { type: String, trim: true, required: true },
      category: { type: String, trim: true, required: true },
      isDeleted : {type: Boolean}
    });
  
    var Category = mongoose.model('Category', CategorySchema);
  
    return Category;
  })();
  