const express = require('express');
const config = require('./config');
const cors = require('cors');
const userRoute = require('./routes/userRoute');
const cartRoute = require('./routes/cartRoute');
const cartItemRoute = require('./routes/cartItemRoute');
const orderRoute = require('./routes/orderRoute');
const orderItemRoute = require('./routes/orderItemRoute');
const productRoute = require('./routes/productRoute');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());

// Middleware
app.use(express.json());
app.use(bodyParser.json());

// Routes
app.use(userRoute);
app.use(cartRoute);
app.use(cartItemRoute);
app.use(orderRoute);
app.use(orderItemRoute);
app.use(productRoute);
// app.use('/auth', authRoutes);
// app.use('/auth', signupRoutes);
// app.use('/products', productRoutes);

// Start the server
const PORT = config.port || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
