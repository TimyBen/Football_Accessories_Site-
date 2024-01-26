const express = require('express');
const config = require('./config');
const userRoutes = require('./routes/productRoute');
const authRoutes = require('./routes/authRoute');
const signupRoutes = require('./routes/signupRoute');
const productRoutes = require('./routes/productRoute');
const bodyParser = require('body-parser');

const app = express();



// Middleware
app.use(express.json());
app.use(bodyParser.json());

// Routes
app.use('/users', userRoutes);
app.use('/auth', authRoutes);
app.use('/auth', signupRoutes);
app.use('/products', productRoutes);

// Start the server
const PORT = config.port || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
