const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const orderRoutes = require('./routes/orders');
const cartRoutes = require('./routes/cart'); // New cart route

const app = express();
const PORT = 5000;

// Enable CORS
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/custstore', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
});

// Routes
app.use('/auth', authRoutes);
app.use('/api/orders', orderRoutes); // Orders route
app.use('/api/cart', cartRoutes); // Cart route

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
