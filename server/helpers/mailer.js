import nodemailer from "nodemailer";

const transport = nodemailer.createTransport({
    host: process.env.SMPT_HOST,
    port: process.env.SMPT_PORT,
    secure : false,
    requireTLS : true,
    auth : {
        user : process.env.SMPT_MAIL,
        pass : process.eve.SMPT_PASSWORD
    }
})

export const sendMail = async (userName, subject, content) => {
    try {
        var mailOptions = {
            from : process.env.SMPT_MAIL,
            to : userName,
            subject : subject,
            html : content
        };
        transport.sendMail(mailOptions, (error, info) => {
            if(error){
                console.log(error)
            }
            console.log("Mail has been sent", info.messageId)
        })
        
    } catch (error) {
        console.log("Errors occurs: ", error)
    }

}
export default sendMail;