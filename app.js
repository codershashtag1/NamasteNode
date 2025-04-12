const express = require('express');
const app = express();

const port = 7777;

app.use('/hello/:id', (req, res) => {
  res.send(`Hello Id ${req.params.id}`)
});

app.use('/hello', (req, res) => {
  console.log(req.query.userId);
  console.log(req.query.name);
  res.send('Hello World')
});

app.use('/test', (req, res) => {
  res.send('Hello Test!')
});

// app.use('/', (req, res) => {
//   res.send('Hello Express!')
// });

app.listen(port, () => {
  console.log(`Server is running on Port : ${port}`);
})