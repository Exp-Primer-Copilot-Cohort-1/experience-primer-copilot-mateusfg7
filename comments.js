// Create Web Server
const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// Data
let comments = [
  { id: 1, username: 'Tom', comment: 'Hello' },
  { id: 2, username: 'Jane', comment: 'Hi' },
  { id: 3, username: 'Linda', comment: 'Hey' },
  { id: 4, username: 'John', comment: 'Good morning' }
];

// Routes
// GET /comments - list all comments
app.get('/comments', (req, res) => {
  res.json(comments);
});

// POST /comments - create new comment
app.post('/comments', (req, res) => {
  const { username, comment } = req.body;
  const id = comments.length + 1;
  comments.push({ id, username, comment });
  res.json({ id, username, comment });
});

// GET /comments/:id - get a single comment
app.get('/comments/:id', (req, res) => {
  const id = Number(req.params.id);
  const comment = comments.find(comment => comment.id === id);
  res.json(comment);
});

// PUT /comments/:id - update a single comment
app.put('/comments/:id', (req, res) => {
  const id = Number(req.params.id);
  const comment = comments.find(comment => comment.id === id);
  const { username, comment: newComment } = req.body;
  comment.username = username;
  comment.comment = newComment;
  res.json(comment);
});

// DELETE /comments/:id - delete a single comment
app.delete('/comments/:id', (req, res) => {
  const id = Number(req.params.id);
  comments = comments.filter(comment => comment.id !== id);
  res.json({ message: 'Comment deleted' });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
```