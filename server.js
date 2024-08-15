const express = require('express');
const sql = require('mssql');
require('dotenv').config();

const app = express();
const port = 3000;

// Database configuration
const dbConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER, 
    database: process.env.DB_DATABASE,
    options: {
        encrypt: false, // Use true for Azure SQL, for local SQL Server set to false
        trustServerCertificate: true, // Required for local connections
    },
};

// Route to get data
app.get('/data', async (req, res) => {
    try {
        // Connect to the database
        await sql.connect(dbConfig);

        // Query the database
        const result = await sql.query('SELECT * FROM YourTableName');

        // Send the results as JSON
        res.json(result.recordset);
    } catch (err) {
        console.error('SQL error', err);
        res.status(500).send('Server Error');
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
