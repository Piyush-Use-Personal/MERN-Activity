/**
 * Created by Piyush on Sun Nov 22 2020 20:22:48 GMT+0530 (India Standard Time)
 * User Management
 * Updated by Piyush on Sun Nov 22 2020 20:22:48 GMT+0530 (India Standard Time)
 * User Management
 */


module.exports = (function DemoUserSchema () {
    var Schema = mongoose.Schema;
  
    var DemoUserSchema = new Schema({
      userId: { type: String, trim: true, required: true },
      emailId: { type: String, trim: true, required: true },
      fullName: { type: String, trim: true, required: true },
      password: { type: String, trim: true, required: true },
      isDeleted: {type: Boolean}
    });
  
    var DemoUser = mongoose.model('DemoUser', DemoUserSchema);
  
    return DemoUser;
  })();
  