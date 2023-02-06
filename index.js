import server from "./server/server.js"
import createUser from "./data/userData.js";
import createProducts from "./data/productData.js";
import createCategory from "./data/categoryData.js";

createUser();
createProducts();
createCategory();

const port =  parseInt(process.env.PORT) || 3001;

server.listen(port, () => {
    console.log(`Server on port ${port}`)
})

