const express = require('express')
const router = express.Router()
import faker from 'faker'
const Product = require('../model/Product.js')

const initUserRoute = (app) => {
    // dang nhap
    router.get('/generate-fake-data', async(req, res, next) => {
        for (let i = 0; i < 96; i++) {
            const newprd = new Product();
            newprd.name = faker.commerce.productName()
            newprd.price = faker.commerce.price();
            newprd.cover = faker.image.image()

            await newprd.save();
        }
        res.send('OK');
    })

    return app.use('/', router);
}

export default initUserRoute;