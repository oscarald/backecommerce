import Product from "../server/models/Product.js";

const getProducts = async (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;
  const category = req.query.category;
  try {
    const options = {
      page,
      limit,
      //populate: "category"
    };
    if (category) {
      const products = await Product.paginate({ category }, options);
      return res.send(products);
    }

    const products = await Product.paginate({}, options);
    return res.send(products);
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
};

const orderProducts = async (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;
  const order = req.query.order;
  try {
    const options = {
      page,
      limit,
      //populate: "category",
      sort: { rate: order },
    };

    const products = await Product.paginate({}, options);
    return res.send(products);
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
};

const orderProductsbyPrice = async (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;
  const order = req.query.order;
  try {
    const options = {
      page,
      limit,
      //populate: "category",
      sort: { price: order },
    };

    const products = await Product.paginate({}, options);
    return res.send(products);
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
};

const orderProductsbyDate = async (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;
  const order = req.query.order;
  try {
    const options = {
      page,
      limit,
      //populate: "category",
      sort: { createdAt: order },
    };

    const products = await Product.paginate({}, options);
    return res.send(products);
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
};

const orderProductsbyBetweenPrice = async (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;
  const min = req.query.min;
  const max = req.query.max;
  try {
    const options = {
      page,
      limit,
      //populate: "category",
      sort: { price: "asc" },
    };

    const products = await Product.paginate({price: { $gte: min, $lte: max }}, options);
    return res.send(products);
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
};

const searchProducts = async (req, res) => {
  const page = req.query.page || 1;
  const limit = req.query.limit || 10;
  const search = req.query.search;
  try {
    const options = {
      page,
      limit,
      //populate: "category",
      sort: { price: "asc" },
    };

    const products = await Product.paginate({name: {$regex: search, $options: 'i'}}, options);
    return res.send(products);
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
};

export {
  getProducts,
  orderProducts,
  orderProductsbyPrice,
  orderProductsbyDate,
  orderProductsbyBetweenPrice,
  searchProducts
};
