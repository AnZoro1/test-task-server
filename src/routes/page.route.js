const { Router } = require('express');
const PageController = require('../controllers/page.controller');
const router = Router();


router.get('/pages', PageController.getPages);

router.patch('/pages/:id', PageController.changePage);

module.exports = router;