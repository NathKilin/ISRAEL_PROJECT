const express = require('express');
const sql = require('mssql');
require('dotenv').config();

const app = express();
const port = 3000;

// Database configuration
   const dbConfig = {
       server: process.env.DB_SERVER,
       database: process.env.DB_DATABASE,
       options: {
           encrypt: false, // Use true if you are connecting to Azure SQL Database
           enableArithAbort: true
       },
       // Use integrated security (Windows Authentication)!!!
       authentication: {
           type: 'ntlm',
           options: {
               domain: process.env.DB_DOMAIN,  // Only necessary if your SQL Server is in a domain
               userName: process.env.DB_USER,  // Optional: Specify if not using the logged-in user
               password: process.env.DB_PASSWORD   // Optional: Specify if not using the logged-in user
           }
       }
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
