const express = require('express');
const app = express();
const path = require('path');
const config = require('dotenv').config();
const PORT = process.env.PORT || 5000;
const user = process.env.GMAIL_USER;
const password = process.env.GMAIL_PW;
const emailReceiver = process.env.EMAIL_RECEIVER;
const nodemailer = require('nodemailer');
const cors = require('cors');

app.use(cors());
app.use(express.json());
if(process.env.NODE_ENV === 'production') {
    // set static folder
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const transporter = nodemailer.createTransport({
    service:'gmail',
    auth: {
      user: `${user}`,
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
    console.log('inside post request', req.body);
    let message = `From: ${req.body.email}${'\n'}Name: ${req.body.name}${'\n\n'}Message: ${'\n'}${req.body.message}`
    let mail = {
        from: user, 
        to: emailReceiver, 
        subject:'Message from portfolio contact',
        text: message,
    }
    transporter.sendMail(mail, (err, data) => {
        if (err) res.json({status: 'fail'})
        else res.json({status: 'success'})
    });
})

// server listening:

app.listen(PORT, () => {
    console.log(`server listening at ${PORT}`);
})
