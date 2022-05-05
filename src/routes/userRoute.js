import experss from 'express';
import userCtrl from '../controller/userCtrl';

const router = experss.Router();

const initUserRoute = (app) => {
    // dang nhap
    router.post('/login', userCtrl.userLogin);

    // dang ky
    router.post('/register', userCtrl.userRegister);

    // lay tat ca user ra
    router.get('/users', userCtrl.getAllUser);

    router.put('/users/update', userCtrl.updateUser);
    // active user
    router.get('/active/:token', userCtrl.activeUser);

    // lay ra mot user
    router.get('/users/:id', userCtrl.getUser);


    return app.use('/api', router);
}

export default initUserRoute;