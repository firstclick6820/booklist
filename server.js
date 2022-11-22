// Define the local port
const PORT = process.env.PORT || 3000;

// server.js
const express = require('express');
const compression = require('compression');
const path = require('path');
const cors = require('cors');

const app = express();

const corsOptions ={
    origin:`http://localhost:${PORT}`, 
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}




app.use(cors(corsOptions));
app.use(compression());
app.use(express.static(path.join(__dirname, 'build')));

app.get('*', function(req, res) {
    res.header("Access-Control-Allow-Origin", "*");
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
    
});



app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});



