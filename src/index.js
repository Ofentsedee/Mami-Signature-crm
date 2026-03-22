'use strict';

const express = require('express');
const mongoose = require('mongoose');
const cron = require('node-cron');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Database connection
mongoose.connect('your_database_connection_string', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected successfully'))
    .catch(err => console.error('Database connection error:', err));

// Basic route
app.get('/', (req, res) => {
    res.send('Welcome to the CRM Application!');
});

// Scheduled job for weekly payment reminders
cron.schedule('0 9 * * 1', () => {
    console.log('Sending weekly payment reminders...');
    // Logic for sending reminders goes here
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
