import Tag from "../models/Tag.model.js";

export const getTags = async (req, res) => {
  try {
    const tags = await Tag.find();
    res.status(200).json(tags);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getTag = async (req, res) => {
  const { name } = req.params;

  try {
    const tag = await Tag.findOne({ tag: name });
    console.log(tag)
    res.status(200).json(tag);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
