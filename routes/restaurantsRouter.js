import express from "express";
import {
  getRestaurant,
  getRestaurants,
} from "../controllers/restaurantsControllers.js";
import {
  checkId,
  checkIfRestaurantExists,
} from "../middlewares/restaurantsMiddlewares.js";

const restaurantsRouter = express.Router();

restaurantsRouter.get("/", getRestaurants);
restaurantsRouter.get("/:id", checkIfRestaurantExists, getRestaurant);

export default restaurantsRouter;
