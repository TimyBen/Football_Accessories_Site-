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
const signUp = require('./routes/signupRoute'); // Assuming signupRoute is the correct route for signup

const app = express();

app.use(cors());

// Middleware
app.use(express.json());
app.use(bodyParser.json());

// Routes
app.use(userRoute);
app.use(signUp); // Assuming signupRoute is the correct route for signup
app.use(cartRoute);
app.use(cartItemRoute);
app.use(orderRoute);
app.use(orderItemRoute);
app.use(productRoute);

// Start the server
const PORT = config.port || 4000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
