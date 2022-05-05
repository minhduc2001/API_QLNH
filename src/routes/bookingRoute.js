import experss from 'express';
import bookingCtrl from '../controller/bookingCtrl';

const router = experss.Router();

const initBookingRoute = (app) => {
    router.get('/booking', bookingCtrl.getAllBooking);

    router.get('/booking/:id', bookingCtrl.getBooking);

    router.post('/booking', bookingCtrl.createBooking);

    router.put('/booking/:id', bookingCtrl.updateBooking);

    router.delete('/booking/:id', bookingCtrl.deleteBooking);

    return app.use('/api', router);
}

export default initBookingRoute;