import express from "express"
const router = express.Router()
import routeUsers from "./routeUsers.js"

router.use('/users', routeUsers);

export default router