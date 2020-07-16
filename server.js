const express=require('express')
const bodyParser=require('body-parser')
const app=express();

const MongoClient=require('mongodb').MongoClient

MongoClient.connect('mongodb+srv://dev5:focus@1234@cluster0.9vkcp.mongodb.net/test?retryWrites=true&w=majority',{
    useUnifiedTopology:true})
    .then(client=>{
    console.log('Connect to Database')
    const db=client.db('marvels-quotes')
    const quotesCollection=db.collection('quotes')
    app.set('view-engine','ejs')
    app.use(express.static('public'))
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({extended:true}))
    app.get('/',function(req,res){
        db.collection('quotes').find().toArray()
        
        .then(result=>{
            
            res.render('index.ejs',{quotes:result})
        })
        .catch(error=>console.error(error))
        
    })
    app.get('/quotes',function(req,res){
        res.sendFile(__dirname+"/index.html")
    })
    
    app.post('/quotes',function(req,res){
        quotesCollection.insertOne(req.body)
        .then(result=>{
            console.log(result)
            res.redirect('/')
        })
        .catch(error=>console.error(error))
        
    })
    app.put('/quotes',(req,res)=>{
        quotesCollection.findOneAndUpdate(
            {name:'devansh dev'},
            {
                $set:{
                    name:req.body.name,
                    quote:req.body.quote
                }
            },
            {
                upsert:true
            }
        )
        .then(result => {
            res.send('Success')
           })
        .catch(error => console.error(error))
      
    })
    app.delete('/quotes',(req,res)=>{
        quotesCollection.deleteOne(
            {name:req.body.name}
        )
        .then(result=>{
            if(result.deleteCount===0){
                return res.json('No quote to delete')
            }
            res.json('deleted the dev here quote')
        })
        .catch(error=>console.error(error))
    })
    app.listen(3000,function(req,res){
        console.log("Hello server is running at port no 3000")
    });
    

})
.catch(console.error)






