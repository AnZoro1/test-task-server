const mongoose = require('mongoose');

const pricePlanSchema = mongoose.Schema({
    id: Number,
    description: String,
    active: Boolean,
    createdAt: String,
    removedAt: String
});

const PricePlan = mongoose.model('PricePlan', pricePlanSchema);

module.exports = PricePlan;