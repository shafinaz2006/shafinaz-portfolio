const express = require('express')
const app = express();
require('dotenv').config();
const port = process.env.PORT || 8080;
const password = process.env.GMAIL_PW;
const nodemailer = require('nodemailer');
const cors = require('cors');

app.use(cors());
app.use(express.json());

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
      user: "s.shafi.test@gmail.com",
      pass: `${password}`
    }
  });

// verifying the connection configuration
transporter.verify(function(error, success) {
    if (error) {
      console.log(error);
    } else {
      console.log("Server is ready to take new messages!");
    }
  });

// post request for contact:

app.post('/contact', (req, res) =>{
    console.log('inside post request');
    console.log(req.body);
    let message = `From: ${req.body.email}${'\n'}Name: ${req.body.name}${'\n\n'}Message: ${req.body.message}`
    let mail = {
        from: 's.shafi.test@gmail.com', 
        to: 'shafinaz2006@gmail.com', 
        subject:'Message from portfolio contact',
        text: message,
    }
    transporter.sendMail(mail, (err, data) => {
        if (err) {
          res.json({status: 'fail'})
        } else {
          res.json({status: 'success'})
        }
    });
    
})

// server listening:
app.listen(port, () => {
    console.log(`server listening at ${port}`);
})
