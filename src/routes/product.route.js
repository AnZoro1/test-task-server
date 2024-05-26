const { Router } = require('express');
const ProductController = require('../controllers/product.controller');
const router = Router();


router.get('/products', ProductController.getProducts);
router.patch('/products/:id', ProductController.changeProduct);

module.exports = router;