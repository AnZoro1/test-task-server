const Product = require('../models/Product.model');

const ProductController = {
    getProducts: async (req, res) => {
        try {
            const product = await Product.find();
            res.json(product);
        } catch (error) {
            return res.json({ error: error.message });
        }
    },

    changeProduct: async (req, res) => {
        try {
            const product = await Product.findOneAndUpdate(
                { id: req.params.id, },
                {
                    name: req.body.name
                },
                {
                    new: true
                }
            );
            res.json(product);
        } catch (error) {
            return res.json({ error: `${error.message}` });
        }
    }
};

module.exports = ProductController;