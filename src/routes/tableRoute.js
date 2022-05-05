import experss from 'express';
import tableCtrl from '../controller/tableCtrl';

const router = experss.Router();

const initTableRoute = (app) => {
    router.get('/tables', tableCtrl.getAllTable);
    router.get('/tables/reset', tableCtrl.resetTable);

    router.get('/tables/:id', tableCtrl.getTable);

    router.post('/tables', tableCtrl.createTable);

    router.put('/tables/:id', tableCtrl.updateTable);

    router.delete('/tables/:id', tableCtrl.deleteTable);

    return app.use('/api', router);
}

export default initTableRoute;