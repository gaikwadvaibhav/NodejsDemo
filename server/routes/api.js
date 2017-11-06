const express=require('express');
const router=express.Router();

const mongoose=require('mongoose');

const db="mongodb://Vaibhav@123:Vaibhav@123@ds117271.mlab.com:/nodejsdemo";
mongoose.Promise=global.Promise;

mongoose.connect(db,(err)=>{
    if(err){
        console.log("Error !"+err);
    }
});



router.get('/',function(req,res){
    res.send('Api Works');
});




router.post('/registerUser',(req,res)=>{
    console.log("Save the new user");
    var newUser=new User();
    newUser.role=req.body.role;
    newUser.first_name=req.body.first_name;
    newUser.last_name=req.body.last_name;
    newUser.user_name=req.body.user_name;
    newUser.email=req.body.email;
    newUser.password=req.body.password;
    newUser.password_confirmation=req.body.password_confirmation;

    newUser.save((err,insertedUser)=>{
        if(err){
            console.log('Error saving video');
        }else{
            console.log('Connected to DB')
            res.json(insertedUser);
        }
    });
});


module.exports=router;