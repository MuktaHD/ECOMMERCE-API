const mongoose=require('mongoose');
const bcrypt=require('bcryptjs');

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

userSchema.pre('save',async function(next){
    const user=this;

    // const salt=await bcrypt.genSalt(10);
    if(user.isModified('password')){
    this.password=await bcrypt.hash(user.password,8);
    }
    next();
});

userSchema.methods.comparePassword=async function(password){
    return await bcrypt.compare(password,this.password);
}

const User=mongoose.model('User',userSchema);

module.exports=User;
