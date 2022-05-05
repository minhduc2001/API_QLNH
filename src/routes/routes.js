import initUserRoute from "./userRoute";
import initDishRoute from "./dishRoute";
import initOrderRoute from "./orderRoute";
import initFakeRoute from "./routeFake";
import initSaleoffRoute from "./saleoffRoute";
import initCategoryRoute from "./categoryRoute";
import initBookingRoute from "./bookingRoute";
import initTableRoute from "./tableRoute";
import otherRoute from "./otherRoute";

const routes = (app) => {
    initFakeRoute(app);
    initUserRoute(app);
    initDishRoute(app);
    initOrderRoute(app);
    initSaleoffRoute(app);
    initCategoryRoute(app);
    initBookingRoute(app);
    initTableRoute(app);
    app.use('/', otherRoute);
}

export default routes;