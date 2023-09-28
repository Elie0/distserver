console.log("TESTTT")
const express = require('express');
const path = require('path');
const port = 4000;


const app = express();

// Serve static files from the "dist" directory
app.use(express.static(path.join(__dirname, 'dist')));

// Catch all other routes and return the "index.html" file
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
