const db = require('../services/dbServices');

const createUser = async ({ full_name, username, password, email, address }) => {
    const { rows } = await db.query(
        'INSERT INTO public."users" (full_name, username, password, email, address) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [full_name, username, password, email, address]
    );
    return rows[0];
};

const getUserByUsername = async (username) => {
    const query = 'SELECT * FROM users WHERE username = $1';
    const result = await db.query(query, [username]);
    return result.rows[0];
};

const updateLastSigninTime = async (user_id, last_signin_time) => {
    try {
        const query = `
          UPDATE users
          SET last_signin_time = $1
          WHERE user_id = $2;
        `;

        await db.query(query, [last_signin_time, user_id]);
        const result = await db.query(query, [last_signin_time, user_id]);
        return result.rows[0];

        // return { success: true, message: 'Last sign-in time updated successfully' };
    } catch (error) {
        // Log the error for debugging purposes
        console.error('Error updating last sign-in time:', error);
        throw error; // Rethrow the error so that the calling function can handle it
    }
};

const getUserById = async (user_id) => {
    const query = 'SELECT * FROM users WHERE user_id = $1';
    const result = await db.query(query, [user_id]);
    return result.rows[0];
};

module.exports = {
    getUserById,
    getUserByUsername,
    createUser,
    updateLastSigninTime,
    // Add other authentication model functions as needed
};
