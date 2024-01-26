const db = require('../services/dbServices');

const getUserByUsername = async (username) => {
    const { rows } = await db.query('SELECT * FROM users WHERE username = $1', [username]);
    return rows[0];
};

const createUser = async ({ full_name, username, password, email, address }) => {
    const { rows } = await db.query(
        'INSERT INTO public."users" (full_name, username, password, email, address) VALUES ($1, $2, $3, $4, $5) RETURNING *',
        [full_name, username, password, email, address]
    );
    return rows[0];
};


module.exports = {
    getUserByUsername,
    createUser,
    // Add other authentication model functions as needed
};
