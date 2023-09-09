const nodemailer = require('nodemailer');
const { EMAIL , PASS } = require("./env.js");
const Mailgen = require("mailgen");

function sendMail(data,res){
    let config = {
        service : 'gmail',
        auth : {
            user: EMAIL,
            pass: PASS
        }
    }

    let transporter = nodemailer.createTransport(config);

    let MailGenerator = new Mailgen({
        theme:"default",
        product:{
            name: "Mailgen",
            link : "https://mailgen.js"
        }
    })

    // let response = {
    //     body : {
    //         title:"E_Tender Application",
    //         intro:data.intro,
    //         table:{
    //             data:[{
    //                 username:data.username,
    //                 otp:data.otp
    //             }]
    //         },
    //         outro:"Thank you for using our application"
    //     }
    // }

    let response = {
        body : {
            title:"E_Tender Application",
            intro:data.intro,
            table:data.table,
            outro:"Thank you for using our application"
        }
    }

    let mail = MailGenerator.generate(response);

    let message = {
        from : EMAIL,
        to : data.to,
        subject:data.subject,
        html:mail
    }

    transporter.sendMail(message).then(
        ()=>{return res.status(201).json({msg:"mail sent"})
    }).catch(error =>{
        return res.status(500).json({error:"error occured"})
    })
}

module.exports = sendMail;