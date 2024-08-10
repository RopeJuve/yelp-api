import Restaurant from "../models/Restaurant.model.js";

export const getRestaurants = async (req, res) => {
  const { tag } = req.query;

  if (tag != undefined) {
    const tagUpper = tag.charAt(0).toUpperCase() + tag.slice(1);
    try {
      const restaurants = await Restaurant.find({ tags: tagUpper });
      return res.status(200).json(restaurants);
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
