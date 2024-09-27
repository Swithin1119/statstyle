const express = require('express');
const router = express.Router();
const Order = require('../models/Order'); // Assuming this is the path to your Order model

// Route to create an order
router.post('/', async (req, res) => {
    try {
        const { userId, name, address, paymentMethod, items, total } = req.body;

        // Ensure all required fields are present
        if (!userId || !name || !address || !paymentMethod || !items || total == null) {
            return res.status(400).json({ message: 'All fields are required.' });
        }

        const newOrder = new Order({
            userId,
            name,
            address,
            paymentMethod,
            items,
            total,
        });
        
        await newOrder.save();
        res.status(201).json(newOrder);
    } catch (error) {
        console.error('Error saving order:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

// Route to fetch all orders
router.get('/', async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

module.exports = router;
