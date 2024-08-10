import  express  from 'express';
import { getTag, getTags } from '../controllers/tagControllers.js';
const tagRouter = express.Router();

tagRouter.get('/', getTags);
tagRouter.get('/:name', getTag);

export default tagRouter;