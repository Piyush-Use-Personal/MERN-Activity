/**
 * Created by Piyush on Sat Nov 21 2020 17:22:35 GMT+0530 (India Standard Time)
 * for adding sizing
 * Updated by Piyush on Sat Nov 21 2020 17:22:35 GMT+0530 (India Standard Time)
 * for adding sizing
 */


module.exports = (function SizingSchema () {
    var Schema = mongoose.Schema;
  
    var SizingSchema = new Schema({
      sizeId: { type: String, trim: true, required: true },
      size: { type: String, trim: true, required: true },
      isDeleted : {type: Boolean}
    });
  
    var Sizing = mongoose.model('Sizing', SizingSchema);
  
    return Sizing;
  })();
  