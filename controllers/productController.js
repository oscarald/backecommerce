import Product from "../server/models/Product.js";

const getProducts = async (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;

  try {
    const options = {
      page,
      limit,
    };
    const products = await Product.paginate({}, options);

    return res.send(products);
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
};

export { getProducts };
