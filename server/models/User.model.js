const {Schema,model}=require('mongoose')
const jwt=require('jsonwebtoken')

const UserSchema= new Schema({
    name: {type:String},
    email: {type:String},
    password: {type:String},
    role: {
        type: String,
        default: "user",
        enum: ["user", "admin", "superadmin"]
      },
})

UserSchema.methods.generateAuthToken = function(){
    const token=jwt.sign({
        _id:this._id,
        name:this.firstName,
    },
    process.env.PRIVATEKEY,
    );
    return token;
    
}
const User = model("UsersDetails", UserSchema);
module.exports=User