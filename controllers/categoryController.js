import Category from "../server/models/Category.js";

const getCategories = async (req, res) => {

  try {
    
    const categories = await Category.find();

    return res.send(categories);
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
};

export { getCategories };