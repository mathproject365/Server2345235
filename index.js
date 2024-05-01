// server.js
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());

// Dummy database for demonstration purposes
let users = [];

// Routes
app.post('/register', (req, res) => {
    const { username, password } = req.body;
    // Basic validation
    if (!username || !password) {
        return res.status(400).json({ message: 'Please provide both username and password' });
    }
    // Check if username already exists
    if (users.find(user => user.username === username)) {
        return res.status(400).json({ message: 'Username already exists' });
    }
    // Add new user to the database
    users.push({ username, password });
    return res.status(201).json({ message: 'User registered successfully' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});