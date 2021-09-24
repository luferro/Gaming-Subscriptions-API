  
import express from 'express';
import { getEAPlay, getUbisoftPlus, getXboxGamePass } from '../Controllers/SubscriptionsController.js';
const router = express.Router();

router.route('/xbox/:type').get(getXboxGamePass);
router.route('/ubisoft/pc').get(getUbisoftPlus);
router.route('/ea/:type').get(getEAPlay);

export default router;