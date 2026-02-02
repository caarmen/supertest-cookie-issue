const express = require('express');

const app = express();

app.get('/v1/myroute', (req, res) => {
  // Set a cookie with a mixed-case name
  res.cookie('Foo', 'bar');
  res.json({ message: 'Cookie set' });
});

module.exports = app;
