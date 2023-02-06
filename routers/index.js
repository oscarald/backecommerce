import express from "express"
const router = express.Router()
import routeUsers from "./routeUsers.js"
import routeProducts from "./routeProducts.js"
import routeCategories from "./routeCategories.js"

router.use('/users', routeUsers);

router.use('/products', routeProducts)

router.use('/categories', routeCategories)

export default router