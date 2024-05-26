const mongoose = require('mongoose');

const pageShema = mongoose.Schema({
    id: Number,
    title: String,
    active: Boolean,
    updatedAt: String,
    publishedAt: String,
});

const Page = mongoose.model('Page', pageShema);

module.exports = Page;