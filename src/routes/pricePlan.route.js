const { Router } = require('express');
const PricePlansController = require('../controllers/pricePlan.controller');
const router = Router();

router.get('/pricePlans', PricePlansController.getPricePlans);
router.patch('/pricePlans/:id', PricePlansController.changePricePlans);

module.exports = router;