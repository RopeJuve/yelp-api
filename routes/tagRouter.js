import  express  from 'express';
import { getTag, getTags } from '../controllers/tagControllers.js';
const tagRouter = express.Router();

tagRouter.get('/', getTags);
tagRouter.get('/:id', getTag);

export default tagRouter;