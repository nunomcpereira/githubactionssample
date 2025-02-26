const express = require('express');
const app = express();

const PORT = process.env.PORT || 4500;

// Root Route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
