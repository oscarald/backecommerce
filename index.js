import server from "./server/server.js"
import createUser from "./data/userData.js";
import createProducts from "./data/productData.js";
import createCategory from "./data/categoryData.js";

createCategory();

createUser();
createProducts();

const port =  parseInt(process.env.PORT) || 3001;

server.listen(port, () => {
    console.log(`Server on port ${port}`)
})

