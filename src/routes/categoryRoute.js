import experss from 'express';
import categoryCtrl from '../controller/categoryCtrl';

const router = experss.Router();

const initCategoryRoute = (app) => {
    router.get('/categories', categoryCtrl.getAllCategory);

    router.get('/categories/:id', categoryCtrl.getCategory);

    router.post('/categories', categoryCtrl.createCategory);

    router.put('/categories/:id', categoryCtrl.updateCategory);

    router.delete('/categories/:id', categoryCtrl.deleteCategory);

    return app.use('/api', router);
}

export default initCategoryRoute;