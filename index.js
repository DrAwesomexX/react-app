const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.send({ hello: 'there' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
