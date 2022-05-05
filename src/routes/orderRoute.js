import express from 'express';
import orderCtrl from "../controller/orderCtrl";

const router = express.Router();

const initOrderRoute = (app) => {
    router.get('/orders', orderCtrl.getAllOrder);

    router.get('/orders/:id', orderCtrl.getOrder);

    router.post('/orders', orderCtrl.createOrder);

    router.put('/orders/:id', orderCtrl.updateOrder);

    router.delete('/orders/:id', orderCtrl.deleteOrder);

    app.use('/api', router);
}

export default initOrderRoute;