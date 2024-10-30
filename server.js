const express=require('express');
const app=express();
app.use(express.json())
var inc=1


total=[]
app.get('/',(req,res)=>{
    res.send(total);
    res.end();
})

app.post('/kkk',(req,res)=>{
    var totAmount=req.body[0].TotalAmount;
   var amt=req.body[1].Amount;
   var price=req.body[1].Price;
   var quan=req.body[1].Quantity;
   var invamt=req.body[2].Amount
   if(price*quan!=amt){
    res.send("Incoreect price");
    res.sendStatus(404);
    res.end();
}
else if(price<0 || amt<0 || quan<0){
    res.send("Incorrect values as negative is not accpeted");
    res.sendStatus(404);
    res.end();
    
}
else if(totAmount!=(invamt+amt)){
    res.send("Total is not correct");
    res.sendStatus(404);
    res.end();
   }
   else {
        var l=req.body;
        l[0].id=inc;
        l[1].id=inc;
        l[2].id=inc;
        inc++;
       total.push(l);
        console.log(total)
   }
   res.end();
   
    
    
})

// app.post()

// app.post('/post'function(req,res){
    
// })
// app.put('/putt'(req,res)=>{

// })


app.delete("/out/:id",(req,res)=>{
    var id=req.params.id;
    for(var i=0;i<total.length;i++){
        if(id==total[i][0].id){
            total.splice(i,i);
            res.send("Successfully deleted");
            res.end();
            
        }
    }
    res.send("unable to find the id");
})

// app.post('/posting',(req,res)=>{
//     res.json(req.body);
// })
// app.post()
app.listen(3000);