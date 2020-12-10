const express= require('express');

const booksRouter=express.Router();

function router_book(nav){



var books=[

    {title:'The Alchemist',
    author:'Paulo Coelho',
     genre:'Novel,Quest,Fantasy',
     img:"alche.jpg"
   },
   {title:'Ente Katha',
   author:' Kamala Surayya',
    genre:'Autobiography',
    img:"ente.jpg"
  },
    {title:'ABSALOM, ABSALOM!',
     author:'WILLIAM FAULKNER',
      genre:'Biblical',
      img:"abshalom.webp"
    },
  
    {title:'THE DARK TOWER ',
     author:'STEPHEN KING',
      genre:'Drama',
      img:"stephenking.webp"
    },
    {title:' I KNOW WHY THE CAGED BIRD SINGS ',
    author:'MAYA ANGELOU',
     genre:'Poetry',
     img:"birdssing.jpg"
   },

   {title:'To Kill a Mockingbird',
   author:'HARPER LEE',
    genre:'Classic',
    img:"moking.jpg"
  },
  {title:'Little Women ',
   author:'Louisa May Alcott',
    genre:'Classic',
    img:"little.jpg"
  },
  {title:'The Water Dancer',
  author: 'Ta-Nehisi Coates',
   genre:'Fantasy',
   img:"water.jpg"
 },


 {title:'Bird Box',
 author:'Josh Malerman',
  genre:'Thriller',
  img:"bird.jpg"
},
{title:'The Whisper Man',
 author:'Alex North',
  genre:'Thriller',
  img:"north.jpg"
},
{title:'Life of Pi',
author: 'Yann Martel',
 genre:'Novel',
 img:"pi.jpg"
},



   {title:' A THOUSAND SPLENDID SUNS ',
   author:'KHALED HOSSEINI',
    genre:'Novel',
    img:"download.webp"
  },
  {title:'TOM & JERRY',
  author:'JOSEPH BARBERA',
   genre:'Cartoon',
   img:"tom.jpg"
 }




]

booksRouter.get("/" , function(req,res){
           res.render("books",{

               nav,
               title:'Library',
               books


           });
       })
       booksRouter.get("/upload" , function(req,res){
  
        res.render("bookUpload",{
  
            nav,
            title:'Add Book',
        
           
  
        });
      })
       booksRouter.get('/:i' , function(req,res){
         const id=req.params.i;
         res.render("book",{

             nav,
             title:'Book..',
             book:books[id]

         });
     })

     return booksRouter

    }

//exporting

module.exports=router_book;