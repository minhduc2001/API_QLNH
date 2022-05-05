import experss from 'express';
import dishCtrl from '../controller/dishCtrl';

const router = experss.Router();

const initDishRoute = (app) => {
    router.get('/dishes', dishCtrl.getAllDish);

    router.get('/dishes/:id', dishCtrl.getDish);

    router.post('/dishes', dishCtrl.createDish);

    router.put('/dishes/:id', dishCtrl.updateDish);

    router.delete('/dishes/:id', dishCtrl.deleteDish);

    return app.use('/api', router);
}

export default initDishRoute;