import express from "express"
const router = express.Router()
import routeUsers from "./routeUsers.js"
import routeProducts from "./routeProducts.js"
import routeCategories from "./routeCategories.js"
import routeSales from "./routeSales.js"

router.use('/users', routeUsers);

router.use('/products', routeProducts)

router.use('/categories', routeCategories)

router.use('/sales', routeSales)

export default router