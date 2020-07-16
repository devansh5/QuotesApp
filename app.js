// const express=require('express')
// const bodyParser=require('body-parser')
// const app=express();


// app.use(bodyParser.urlencoded({extended:true}));


// // app.listen(50);


// // app.listen(3000,function(req,res){
// //     console.log("server is running")
// // })

// app.listen(3000,function(req,res){
//     console.log("server is running");
// })

// app.get("/",function(req,res){
//     res.sendFile(__dirname+"/index.html")
// })

// app.post("/",function(req,res){
//     res.send("posting something")
//     res.send(req.body.v1+req.body.v2)
// })

// app.get("/contact",function(req,res){
//     res.send("welcome to contact")
// })




// app.get('/about',function(req,res){
//     res.send('my name is devansh chaubey')
// })
// app.get('/contact',function(req,res){
//     res.send('My email address is devkumar5436@gmail.com')
// });

// app.post('/calculator',function(req,res){
//     console.log(req.body)
//     let n1=parseInt(req.body.v1)
//     let n2=parseInt(req.body.v2)

//     let sum=n1+n2

//     res.send("the sum of two number is : "+sum)

// });