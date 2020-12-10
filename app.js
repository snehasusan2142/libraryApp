const express= require('express');

const app= new express();
const port=process.env.PORT || 7000;

const nav=[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}];

const booksRouter = require('./src/routes/bookRoutes')(nav);
const authorsRouter = require('./src/routes/authorRoutes')(nav);
const loginRouter=require('./src/routes/loginRoutes')(nav);
const signinRouter=require('./src/routes/sigininRoutes')(nav);
app.use(express.static('./public'))

app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/login',loginRouter);
app.use('/signin',signinRouter);
app.get("/" , function(req,res){
    res.render("index",{

       nav,
        title:'Library'


    });
})

    // app method
        // app.get("/books" , function(req,res){
        //     res.render("books",{

        //         nav:[{link:'/books',name:'Books'},{link:'/authors',name:'Authors'}],
        //         title:'Library'


        //     });
        // })


app.listen(port,()=>{console.log("server is ready at port "+ port)});
console.log("Ready")