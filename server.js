const app = require('./app');

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Test the endpoint: curl -i http://localhost:${PORT}/v1/myroute`);
});
