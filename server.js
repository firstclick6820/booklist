// Define the local port
const PORT = process.env.PORT || 3000;

// server.js
const express = require('express');
const compression = require('compression');
const path = require('path');
const app = express();

app.use(compression());
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
    
});



app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});