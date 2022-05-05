import experss from 'express';
import eventsCtrl from '../controller/eventsCtrl';

const router = experss.Router();

const initCategoryRoute = (app) => {
    router.get('/events', eventsCtrl.getAllEvents);

    router.get('/events/:id', eventsCtrl.getEvent);

    router.post('/events', eventsCtrl.createEvent);

    router.put('/events/:id', eventsCtrl.updateEvent);

    router.delete('/events/:id', eventsCtrl.deleteEvent);

    return app.use('/api', router);
}

export default initCategoryRoute;