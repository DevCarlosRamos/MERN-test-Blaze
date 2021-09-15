const {Router} = require('express');
const { getOrders, postOrders, getOrder, updateOrders, deleteOrders } = require('../controllers/orders.controller');
const router = Router();

router.route('/')
    .get(getOrders)
    .post(postOrders);

router.route('/:id')
    .get(getOrder)
    .put(updateOrders)
    .delete(deleteOrders);

module.exports = router;