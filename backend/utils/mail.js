import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config(); 
console.log("Setting up mail transporter with user:", process.env.EMAIL_USER);

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // use TLS
  auth: {   
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  tls: {
    rejectUnauthorized: false // ⚠️ dev fix
  }
});

export default transporter;