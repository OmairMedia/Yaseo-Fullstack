import nodemailer from 'nodemailer';


export default defineEventHandler(async event => {
    try {
      const transporter = nodemailer.createTransport({
        host: "my.smtp.host",
        port: 465,
        secure: true, // use TLS
        auth: {
          user: "username",
          pass: "pass",
        },
        tls: {
          // do not fail on invalid certs
          rejectUnauthorized: false,
        },
      });
  
      const info = await transporter.sendMail({
        from: "sender@server.com",
        to: "receiver@sender.com",
        subject: "Message title",
        html: `<p>HTML version of the message</p>`
      });
  
      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  
      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

      return {
        status:true,
        message:'Email has been sent!'
      }
    } catch (err) {
      return {
        status:false,
        error:err
      }
    }
})