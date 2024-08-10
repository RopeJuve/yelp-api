import  express  from 'express';
import { getTags } from '../controllers/tagControllers.js';
const tagRouter = express.Router();

tagRouter.get('/', getTags);

export default tagRouter;