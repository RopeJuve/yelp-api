import Restaurant from "../models/Restaurant.model.js";


export  const checkId = (req, res, next) => {
    const { id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).send(`The id ${id} is not valid`);
      }
    next();
}

export const checkIfRestaurantExists = async (req, res, next) => {
    const { id } = req.params;
    try{
        const restaurant = await Restaurant.findById(id);
        if(!restaurant) return res.status(404).json({ message: "Restaurant not found" });
        req.restaurant = restaurant;
        next();
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};