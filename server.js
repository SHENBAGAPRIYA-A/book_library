var express =require('express')
var app=express();
var cors=require("cors");
app.use(cors())

const mongoose=require('mongoose');
mongoose.
    connect('mongodb://localhost:27017/book-library')
    .then(console.log("Connected to mongo.."));

const bookSchema=new mongoose.Schema({
    name:{type:String,required:true},
    category:{type:String,required:true},
    author:{type:String,required:true},
})

let Books=mongoose.model("Books",bookSchema)
app.use(express.json())
//var arr=[{name:"John",id:1},{name:"Semba",id:2}]
app.get('/api',async(req,res)=>{
    const book=await Books.find();
    res.json(book);
})
app.post('/api',(req,res)=>{
    const{name,category,author}=req.body;
    const newItem=new Books({name,category,author});
    newItem.save()
    res.status(200).json(newItem)
})

/
app.put('/api/:id',async(req,res)=>{
   let _id=req.params.id;
   console.log(_id);
   const itemToUpdate=await Books.findByIdAndUpdate(_id,req.body);
   if(!itemToUpdate) return res.status(404).send("No Item Found with given id");
   res.status(200).send(req.body);
});
app.delete('/api/:id',async(req,res)=>{
    let _id=req.params.id;
    console.log(_id);
    const itemToDelete=await Books.findByIdAndDelete(_id,req.body);
    if(!itemToDelete) return res.status(404).send("No Item Found with given id");
    res.status(200).send(req.body);
 });
app.listen(2001,()=>{
    console.log('Server is running...');
})
