const express = require('express');
const app = express();

app.get('/', (req, res) => {
  console.log('user hit the resource');
  res.status(200).send('Home Page');
});

app.get('/about', (req, res) => {
  res.status(200).send('About Page');
});

app.get('*', (req, res) => {
  res.status(404).send('Resource Not Found');
});

app.listen(5000, () => {
  console.log('server is listening on port number: 5000');
});
// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen
