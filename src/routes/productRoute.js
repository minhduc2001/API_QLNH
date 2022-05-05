import experss from 'express';
import productCtrl from '../controller/productCtrl';

const router = experss.Router();

const initProductRoute = (app) => {
    // lay tat ca user ra
    router.get('/', productCtrl.getAllProduct);

    // lay ra mot user
    router.get('/:id', productCtrl.getProduct);

    // router.get('/page/:page', productCtrl.getLimitProduct);
    // router.get('/sort', productCtrl.sortProducts)
    return app.use('/', router);
}

export default initProductRoute;