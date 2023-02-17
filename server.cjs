const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");


// server used to send send emails
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log(`Server Running ${ 5000 }`));


const contactEmail = nodemailer.createTransport({
  service: 'smtp.gmail.com', /* smtp.gmail.com */
  auth: {
    user: "p.emanuelszarabar@gmail.com",
    pass: "zrtfawdqubyrjqlu" /* */
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: name,
    to: "lic.szgonzalez@gmail.com",
    subject: "Contact Form - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});