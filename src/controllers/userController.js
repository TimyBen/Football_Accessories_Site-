const jwt = require('jsonwebtoken');
const config = require('../config');
const bcrypt = require('bcrypt');
const userModel = require('../models/userModel');

console.log(config.secretKey);

// src/controllers/userController.js

const getUserById = async (req, res) => {
    const userId = req.params.id;

    try {
        const user = await userModel.getUserById(userId);
        res.json({ success: true, user });
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};

const signup = async (req, res) => {
    const { full_name, username, password, email, address } = req.body;

    try {
        // Check if the username already exists
        const existingUser = await userModelModel.getUserByUsername(username);
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
    const { username, password, last_signin_time } = req.body;

    try {
        const user = await userModel.getUserByUsername(username);

        if (user) {
            // Verify the provided password with the hashed password stored in the database
            bcrypt.compare(password, user.password, async (err, result) => {
                if (err) {
                    console.error(err);
                    res.status(500).json({ error: 'Internal Server Error' });
                } else {
                    if (result) {
                        // Password is correct, generate a JWT token
                        const token = jwt.sign({ user_id: user.id, username: user.username }, config.secretKey);

                        // Record the last sign-in time
                        const lastSigninTime = new Date();
                        console.log(lastSigninTime)
                        await userModel.updateLastSigninTime(user.id, lastSigninTime);

                        res.json({ token, username, lastSigninTime });
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

const updateLastSigninTime = async (req, res) => {
    const userId = req.user.user_id; // Assuming you have the user ID in req.user

    try {
        // Get the current date and time
        const lastSigninTime = new Date();

        // Update the last sign-in time in the database
        await userModel.updateLastSigninTime(userId, lastSigninTime);

        // Respond with success message or additional data
        res.json({ success: true, message: 'Last sign-in time updated successfully' });
    } catch (error) {
        // Log the error for debugging purposes
        console.error('Error updating last sign-in time:', error);

        // Respond with an appropriate error message
        res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
};


module.exports = {
    getUserById,
    login,
    signup,
    updateLastSigninTime,
    // Add other authentication controller functions as needed
};
