import express from "express";
import {
  getRestaurant,
  getRestaurants,
} from "../controllers/restaurantsControllers.js";

const restaurantsRouter = express.Router();

restaurantsRouter.get("/", getRestaurants);
restaurantsRouter.get("/:id", getRestaurant);

export default restaurantsRouter;
