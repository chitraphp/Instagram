const express = require('express');
const mongoose = require('mongoose');
const users = require('./routes/api/users');
const comments = require('./routes/api/comments');
const posts = require('./routes/api/posts');
const app = express();

const db = require('./config/keys').mongoURI;
mongoose
  .connect(db)
  .then(() => console.log('MongoDb connected'))
  .catch(err => console.log(err));

app.get('/', (req, res) => res.send('Hello world'));

// Use routes
app.use('/api/users', users);
app.use('/api/comments', comments);
app.use('/api/posts', posts);
const port = 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));