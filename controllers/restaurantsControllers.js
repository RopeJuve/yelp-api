import Restaurant from "../models/Restaurant.model.js";

export const getRestaurants = async (req, res) => {
  const { tag } = req.query;
  console.log(tag);
  if (tag) {
    try {
      const restaurants = await Restaurant.find();
        console.log(restaurants);
      const filteredRestaurants = restaurants.filter((restaurant) => {
        return restaurant.tags.includes({
            name: tag,
        });
      });
      return res.status(200).json(filteredRestaurants);
    } catch (error) {
      res.status(404).json({ message: error.message });
    }
  }

  try {
    const restaurants = await Restaurant.find();
    res.status(200).json(restaurants);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getRestaurant = async (req, res) => {
  res.status(200).json(req.restaurant);
};
