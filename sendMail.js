const nodemailer = require('nodemailer');


const sendmail = (req,res) =>{

    let transporter =  nodemailer.createTransport({
        host:"smtp.gmail.com",
        port:465,
        secure: true,
        auth:{
            user:"amansisodiya1407@gmail.com",
            pass:"fpfxcazzhgilltta",
        },
    });

    let info =  transporter.sendMail({
        from: '" Aman Sisodiya" <amansisodiya1407@gmail.com>',
        to:"sisodiya.aman07@gmail.com",
        subject:"hello",
        text:"hello world",
        
    });
    console.log("message sent",info.messageId); 

    res.send("sending mail");

}

module.exports = sendmail;