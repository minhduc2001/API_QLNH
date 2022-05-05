import express from 'express';
import saleoffCtrl from '../controller/saleoffCtrl';

const router = express.Router();

const initSaleoffRoute = (app) => {
    router.get('/saleoff', saleoffCtrl.getAllSaleoff);

    router.get('/saleoff/:id', saleoffCtrl.getSaleoff);

    router.post('/saleoff', saleoffCtrl.createSaleoff);

    router.put('/saleoff/:id', saleoffCtrl.updateSaleoff);

    router.delete('/saleoff/:id', saleoffCtrl.deleteSaleoff);

    app.use('/api', router);
};

export default initSaleoffRoute;