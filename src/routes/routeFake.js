const express = require('express')
const router = express.Router()
import faker from 'faker'
import Dish from '../model/User'
const initFakeRoute = (app) => {
    router.get('/generate-fake-data', async(req, res, next) => {
        for (let i = 0; i < 100; i++) {
            const newprd = new Dish();
            newprd.email = faker.internet.email();
            newprd.address = faker.address.city();
            newprd.username = faker.name.findName();
            newprd.password = faker.internet.password();
            newprd.gender = 'female'
            newprd.phone = faker.phone.phoneNumber();
            newprd.isActive = true;
            // newprd.role = 4;
            await newprd.save();
        }
        res.send('OK');
    })

    return app.use('/', router);
}

export default initFakeRoute;