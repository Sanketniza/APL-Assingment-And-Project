// Import required modules
const express = require('express');
const path = require('path');

// Initialize Express app
const app = express();
const port = 3000;

// Middleware to parse URL-encoded and JSON data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// --- ROUTES ---

// [1] GET request — serve the HTML form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// [2] POST request — form submission
app.post('/submit-form', (req, res) => {
  const name = req.body.username;
  const email = req.body.useremail;

  res.send(`
    <h1>POST Request Received</h1>
    <p>Thank you, <strong>${name}</strong>!</p>
    <p>We have your email: <strong>${email}</strong></p>
    <a href="/">Go Back</a>
  `);
});

// [3] PUT request — update user info (simulated)
app.put('/update-user', (req, res) => {
  const { username, useremail } = req.body;
  res.json({
    message: 'User information updated successfully!',
    updatedUser: { username, useremail }
  });
});

// [4] DELETE request — delete user info (simulated)
app.delete('/delete-user', (req, res) => {
  const { username } = req.body;
  res.json({
    message: `User "${username}" has been deleted successfully!`
  });
});

// Start the server
app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
