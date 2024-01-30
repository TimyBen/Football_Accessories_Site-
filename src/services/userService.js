// userService.js
const userModel = require('../models/userModel');

const getUserByUsername = async (username) => {
    return await userModel.getUserByUsername(username);
};

const updateLastSigninTime = async (userId, lastSigninTime) => {
    return await userModel.updateLastSigninTime(userId, lastSigninTime);
};

const createUser = async (userData) => {
    return await userModel.createUser(userData);
};

module.exports = {
    getUserByUsername,
    updateLastSigninTime,
    // Other functions...
};
