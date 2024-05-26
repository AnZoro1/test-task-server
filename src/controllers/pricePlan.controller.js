const PricePlans = require('../models/PricePlan.model');

const PricePlansController = {
    getPricePlans: async (req, res) => {
        try {
            const pricePlans = await PricePlans.find();
            res.json(pricePlans);
        } catch (error) {
            return res.json({ error: error.message });
        }
    },

    changePricePlans: async (req, res) => {
        try {
            const pricePlans = await PricePlans.findOneAndUpdate(
                { id: req.params.id, },
                {
                    description: req.body.description
                },
                {
                    new: true
                }
            );
            res.json(pricePlans);
        } catch (error) {
            return res.json({ error: `${error.message}` });
        }
    }
};

module.exports = PricePlansController;