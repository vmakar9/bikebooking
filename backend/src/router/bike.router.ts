import {Router} from "express"
import {bikeController} from "../controller/bike.controller";
import {bikeMiddleware} from "../middlewares/bike.middleware";

const router = Router()

router.get('/',bikeController.getAll)
router.post('/',bikeMiddleware.isValidCreate,bikeController.create)
router.delete('/:bikeId',bikeMiddleware.getByIdAndThrow,bikeController.delete)
router.patch('/:bikeId',bikeMiddleware.getByIdAndThrow,bikeController.updateStatus)
router.get('/statistics',bikeController.getStatistics)
export const bikeRouter = router