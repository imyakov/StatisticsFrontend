const express = require('express');
const axios = require('axios'); // Import axios library
const data = require('./data.json');

const app = express();

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Render the index page with data
app.get('/', async (req, res) => {
    try {
        // Make HTTP request to localhost:8081/statistics/slots
        const response = await axios.get('http://localhost:8081/statistics/slots');
        
        // Extract the JSON data from the response
        const jsonData = response.data;
        
        // Render the index page with the retrieved data
        res.render('index', { jsonData });
    } catch (error) {
        // Handle error if request fails
        console.error('Error fetching data:', error);
        res.status(500).send('Error fetching data');
    }
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
