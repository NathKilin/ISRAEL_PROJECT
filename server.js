const express = require('express');
const sql = require('mssql');
const axios = require('axios'); 
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const dbConfig = {
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000,
    },
    options: {
        trustServerCertificate: true,
        trustedConnection: true,
        connectTimeout: 30000,
    },
};

app.add = function() { return 'success'; };
app.sum = (a, b) => a + b;

// Route to get data
app.get('/data', async (req, res) => {
    try {
        const headers = { "Content-Type": "application/json", "Accept": "*/*" };
        const data = { username: "admin", password: "password123" };

        const response = await axios.post('https://restful-booker.herokuapp.com/auth', data, headers);
        res.json({ message: 'Data successfully sent via Axios', data: response.data });
    } catch (err) {
        console.error('SQL error', err);
        res.status(500).send('Server Error');
    }
});

// Route to get products
app.get('/products', async (req, res) => {
    try {
        const response = await axios.get('https://simple-grocery-store-api.glitch.me/products');
        res.json({
            message: 'Data successfully sent via Axios',
            data: response.data,
        });
    } catch (err) {
        console.error('Error fetching products', err);
        res.status(500).send('Server Error');
    }
});

// Route to respond to the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the API');
});

// Start the server only if this file is run directly (not in tests)
if (require.main === module) {
    app.listen(port, () => {
        console.log(`Server is running on http://localhost:${port}`);
    });
}

module.exports = app;
