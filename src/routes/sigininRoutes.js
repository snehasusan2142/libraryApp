const express= require('express');

const signinRouter=express.Router();

function router_signin(nav){

signinRouter.get("/" , function(req,res){
           res.render("signin",{

               nav,
               title:'Library',
        


           });
       })

return signinRouter

    }

//exporting

module.exports=router_signin;