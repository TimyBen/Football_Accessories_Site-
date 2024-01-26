module.exports = {
    port: process.env.PORT || 4000,
    database: {
        connectionString: process.env.DATABASE_URL || 'postgresql://postgres:admin@localhost:5432/SoccerStore',
    },
    secretKey: '5EBC790B9D3EB43BC188F1868619015850C541558F970A16DBD0DA6E7B227966',
};
