const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: { type: String, required: true }, // ID of the user placing the order
    name: { type: String, required: true }, // Customer's name
    address: { type: String, required: true }, // Shipping address
    paymentMethod: { type: String, required: true }, // Payment method (e.g., Credit Card, PayPal)
    items: [
        {
            productId: { type: String, required: true }, // Product ID
            name: { type: String, required: true }, // Product name
            quantity: { type: Number, required: true, default: 1 }, // Quantity ordered
            price: { type: Number, required: true }, // Price per unit
            imageUrl: { type: String }, // Image URL of the product
        },
    ],
    total: { type: Number, required: true }, // Total order amount
    status: { type: String, default: 'Pending' }, // Order status (e.g., Pending, Shipped, Delivered)
    deliveryDate: { type: Date }, // Estimated delivery date
    createdAt: { type: Date, default: Date.now }, // Order creation date
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;