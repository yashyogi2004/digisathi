const express=require('express');
const app=express();
const Path=require('path');
app.set('view engine', 'ejs');
app.use(express.static(Path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    res.render('index');
})
app.get('/peergroup',(req,res)=>{
    res.render('peergroup');
})
app.get('/chatbot',(req,res)=>{
    res.render('chatbot');
})
app.get('/reflect',(req,res)=>{
    res.render('reflect');
})
app.get('/music',(req,res)=>{
    res.render('music');
})
app.get('/exercise',(req,res)=>{
    res.render('exercise');     
})
app.get('/mindfulness',(req,res)=>{
    res.render('mindfulness');
})
app.get('/privacy',(req,res)=>{
    res.render('privacy');
})
app.listen(3000,()=>{console.log('listening on port 3000')});
