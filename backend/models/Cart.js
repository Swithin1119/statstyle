// models/Cart.js
const mongoose = require('mongoose');

const cartItemSchema = new mongoose.Schema({
    productId: { type: Number, required: true },
    title: { type: String, required: true },
    price: { type: String, required: true },
    imgSrc: { type: String, required: true },
}, { timestamps: true });

const CartItem = mongoose.model('CartItem', cartItemSchema);

module.exports = CartItem;
