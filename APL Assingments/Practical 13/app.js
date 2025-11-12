// app.js

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let users = [
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 2, name: 'Bob', email: 'bob@example.com' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com' }
];

app.get('/', (req, res) => {
  res.send('<h1>User API</h1><p>Use /users to see all users.</p>');
});

app.get('/users', (req, res) => {
  res.json(users);
});

app.get('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find(u => u.id === id);
  
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

app.get('/search', (req, res) => {
  const nameQuery = req.query.name;
  
  if (!nameQuery) {
    return res.status(400).json({ error: 'Name query parameter is required' });
  }
  
  const searchResults = users.filter(
    u => u.name.toLowerCase().includes(nameQuery.toLowerCase())
  );
  
  res.json(searchResults);
});

app.post('/users', (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required' });
  }

  const newUser = {
    id: users.length + 1,
    name: name,
    email: email
  };

  users.push(newUser);
  
  res.status(201).json(newUser);
});

app.listen(port, () => {
  console.log(`API server running at http://localhost:${port}`);
});