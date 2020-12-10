const express= require('express');

const authorsRouter=express.Router();

function router_auth(nav){



var authors=[
    {title:'Arundhati Roy',
     author:'Fiction',
      genre:'English',
      img:"aru.jpg"
    },
    {title:'Catherine Asaro',
     author:'Fantasy writer',
      genre:'English',
      img:"cat.jpg"
    },
    {title:'J.K Rowling',
     author:'Fantasy writer',
      genre:'English',
      img:"jk.jpg"
    },
    {title:'K. N. Panikkar',
    author:'Historian',
     genre:'Malayalam',
     img:"panikkar.jpg"
   },

   {title:'Kamala Surayya',
   author:'Novelist, Short story writer, Poet',
    genre:'Malayalam, Hindi',
    img:"kamala.jpg"
  },
    {title:'William Shakespeare',
     author:'Dramatist',
      genre:'English',
      img:"shake.jpg"
    },
    {title:'Agatha Christie',
     author:'Novelist',
      genre:'English',
      img:"agu.png"
    },
    {title:'Paulo Coelho',
     author:'Novelist',
      genre:'English',
      img:"paulo.jpg"
    },
    {title:'Rabindranath Tagore',
     author:'Poet',
      genre:'Bengali',
      img:"tagore.jpg"
    },
    
    {title:'Chetan Bhagat',
     author:'Romance, Realistic fiction, Non-fiction',
      genre:'English',
      img:"che.jpg"
    },
    {title:'Vaikom Muhammad Basheer ',
     author:'Novelist, Short story writer',
      genre:'Malayalam',
      img:"basheer.jpg"
    },
   
   {title:'A. P. J. Abdul Kalam',
    author:'Biography, Inspirational Fiction',
     genre:'English,Hindi,Tamil',
     img:"kalam.webp"
   }
    
]
var cnt=5;

authorsRouter.get("/" , function(req,res){
           res.render("authors",{

               nav,
               title:'Authors',
               authors


           });
       })

       
       authorsRouter.get("/upload" , function(req,res){
  
        res.render("authorUpload",{
  
            nav,
            title:'Add Author',
        
           
  
        });
  
   
  
    })


       authorsRouter.get('/:i' , function(req,res){
        const id=req.params.i;
        res.render("author",{

            nav,
            title:'Author..',
            author:authors[id]

        });
    })



     return authorsRouter

    }

//exporting

module.exports=router_auth;