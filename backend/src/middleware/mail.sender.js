import nodemailer from "nodemailer";

async function sendEmail(sendTo, subject, message) {
    try {
        const auth = nodemailer.createTransport({
            service: "gmail",
            secure : true,
            port : 465,
            auth: {
                user: process.env.AUTH_EMAIL,
                pass: process.env.AUTH_PASS
            }
        });
  
      const receiver = {
        from: process.env.AUTH_EMAIL, // Sender (your email)
        to: sendTo,   // Recipient (also your email)
        subject: subject,
        html: message,
      };
  
      const info = await auth.sendMail(receiver);

    // Log the result
    // console.log("Email sent:", info.messageId);
    } catch (error) {
      console.error("Error sending email:", error);
    }
  }
  

export default sendEmail;