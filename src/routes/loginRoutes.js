const express= require('express');

const loginRouter=express.Router();

function router_login(nav){



loginRouter.get("/" , function(req,res){
           res.render("login",{

               nav,
               title:'Library',
        


           });
       })

    //    loginRouter.get("/" , function(req,res){
    //     res.render("login",{

    //         nav,
    //         title:'Library',
     


    //     });
    // })

      
     

     return loginRouter

    }

//exporting

module.exports=router_login;