const express = require('express');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('<h1>Hello from custom S2I Node.js Builder!</h1>');
});

app.listen(port, () => {
  console.log(`✅ App running on port ${port}`);
});
