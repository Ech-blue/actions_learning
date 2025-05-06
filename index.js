const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleString();
  
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Express App</title>
      <style>
        .red-text {
          color: red;  
          font-weight: bold;
        }
        body {
          font-family: Arial, sans-serif;
          padding: 20px;
          background-color: #f0f0f0;  /* Light gray background */
        }
      </style>
    </head>
    <body>
      <h1>Current date and time</h1>
      <p class="red-text">Current date and time: ${formattedDate}</p>
    </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
