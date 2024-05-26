const mongoose = require('mongoose');

const productShema = mongoose.Schema({
    id: Number,
    name: String,
    options: {
        size: String,
        amount: Number
    },
    active: Boolean,
    createdAt: String
});

const Product = mongoose.model('Product', productShema);

module.exports = Product;