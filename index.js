const express = require('express')
const app = express();
let PORT = 8000;

const sendmail = require('./sendMail')

app.get('/',(req,res)=>{
    res.send("This is home page");
});
app.get('/send',sendmail);

const start = async () =>{
    try{
        app.listen(PORT,()=>{
            console.log("Start the server")
        })
    }catch(error){}

}
start();