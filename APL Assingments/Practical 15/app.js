const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
  const data = {
    pageTitle: 'Dynamic Homepage',
    isAdmin: true,
    users: [
      { name: 'Akhil;', email: 'akhil@example.com' },
      { name: 'Adi', email: 'adi@example.com' },
      { name: 'Abhay', email: 'abhay@example.com' }
    ]
  };

  res.render('home', data);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});