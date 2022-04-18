import express from 'express';
import categorieRoutes from './category/category.route';
import userRoutes from './user/user.route';
import tradermarkRoutes from './tradermark/tradermark.route';
import designRoutes from './design/design.route';
import modelRoutes from './model/model.route';
import shoesRoutes from './shoes/shoes.route'

const router = express.Router();

router.use('/categories', categorieRoutes);
router.use('/users', userRoutes);
router.use('/tradermarks', tradermarkRoutes);
router.use('/designs', designRoutes);
router.use('/models', modelRoutes);
router.use('/shoes', shoesRoutes);

export default router;
