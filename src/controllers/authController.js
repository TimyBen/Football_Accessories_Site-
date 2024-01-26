const jwt = require('jsonwebtoken');
const config = require('../config');
const bcrypt = require('bcrypt');
const authModel = require('../models/authModel');

console.log(config.secretKey);

const signup = async (req, res) => {
    const { full_name, username, password, email, address } = req.body;

    try {
        // Check if the username already exists
        const existingUser = await authModel.getUserByUsername(username);
        if (existingUser) {
            return res.status(400).json({ error: 'Username already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user with additional information
        const newUser = await authModel.createUser({
            full_name,
            username,
            password: hashedPassword,
            email,
            address,
        });

        // Generate a JWT token for the new user
        const token = jwt.sign({ user_id: newUser.id, username: newUser.username }, config.secretKey);

        res.json({ token, full_name, username, password, email, address });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const user = await authModel.getUserByUsername(username);

        if (user) {
            // Verify the provided password with the hashed password stored in the database
            bcrypt.compare(password, user.password, (err, result) => {
                if (err) {
                    console.error(err);
                    res.status(500).json({ error: 'Internal Server Error' });
                } else {
                    if (result) {
                        // Password is correct, generate a JWT token
                        const token = jwt.sign({ user_id: user.id, username: user.username }, config.secretKey);
                        res.json({ token, username, password });
                    } else {
                        // Password is incorrect
                        res.status(401).json({ error: 'Invalid username or password' });
                    }
                }
            });
        } else {
            // User not found
            res.status(401).json({ error: 'Invalid username or password' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


module.exports = {
    login,
    signup,
    // Add other authentication controller functions as needed
};
