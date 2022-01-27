import express from 'express';
import categoryRoutes from './category-routes.js';
import manufacturerRoutes from './manufacturer-routes.js';
import productRoutes from './product-routes.js';

const apiRouter = express.Router();

apiRouter.use(categoryRoutes)
apiRouter.use(manufacturerRoutes);
apiRouter.use(productRoutes);

export default apiRouter;