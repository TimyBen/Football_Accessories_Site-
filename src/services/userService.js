// userService.js
const userModel = require('../models/userModel');

const getUserByUsername = async (username) => {
    return await userModel.getUserByUsername(username);
};

const updateLastSigninTime = async (userId, lastSigninTime) => {
    return await userModel.updateLastSigninTime(userId, lastSigninTime);
};

module.exports = {
    getUserByUsername,
    updateLastSigninTime,
    // Other functions...
};
