const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
app.use(express.static('public')); // Serve static files from the 'public' directory

app.use(bodyParser.json());

let globalPassword = '123';

// API to set a new password
app.patch('/Updatepassword', (req, res) => {
  const oldPassword = req.body.oldPassword;
  const newPassword = req.body.newPassword;

  if (oldPassword === globalPassword) {
    globalPassword = newPassword;
    res.json({ message: 'Password updated successfully' });
  } else {
    res.status(401).json({ message: 'Old password is incorrect' }
    );
    }
});

// API to sign in and check the password
app.post('/SignIn', (req, res) => {
  const password = req.body.password;

  if (password === globalPassword) {
    console.log("ok")
    return res.status(200).json({ status: 'ok' });
  } else {
    console.log("it's ok ");
    return res.status(401).json({ status: 'wrong password' });
    
  }
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
