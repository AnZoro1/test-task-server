const Page = require('../models/Page.model');

const PageController = {
    getPages: async (req, res) => {
        try {
            const page = await Page.find();
            res.json(page);
        } catch (error) {
            return res.json({ error: error.message });
        }
    },

    changePage: async (req, res) => {
        try {
            const page = await Page.findOneAndUpdate(
                { id: req.params.id, },
                {
                    title: req.body.title
                },
                {
                    new: true
                }
            );
            res.json(page);
        } catch (error) {
            return res.json({ error: `${error.message}` });
        }
    }
};

module.exports = PageController;