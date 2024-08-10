import Tag from "../models/Tag.model.js";

export const getTags = async (req, res) => {
  try {
    const tags = await Tag.find();
    res.status(200).json(tags);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
