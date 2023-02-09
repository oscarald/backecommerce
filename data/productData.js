import Product from "../server/models/Product.js";
import Category from "../server/models/Category.js";

const almuerzo = await Category.findOne({ name: "Almuerzo" });
const bebidasCalientes = await Category.findOne({ name: "Bebidas Calientes" });
const cafeOrganico = await Category.findOne({ name: "Café Órganico" });
const embotellados = await Category.findOne({ name: "Embotellados" });
const jugos = await Category.findOne({ name: "Jugos" });
const masitas = await Category.findOne({ name: "Masitas" });
const matesEmbolsados = await Category.findOne({ name: "Mates Embolsados" });
const miel = await Category.findOne({ name: "Miel" });
const souvenirs = await Category.findOne({ name: "Souvernirs" });
const matesGranel = await Category.findOne({ name: "Mates a granel" });

const products = [
  {
    name: "product 1",
    description: "product 1",
    rate: Math.floor(Math.random() * 6),
    price: 20,
    imgUrl: "http",
    category: almuerzo._id,
  },
  {
    name: "Diario Completo",
    description: "Diario Completo",
    rate: Math.floor(Math.random() * 6),
    price: 25,
    imgUrl:
      "https://res.cloudinary.com/de8brtp2o/image/upload/v1674530012/siipi/frapusii_l8m5ax.jpg",
    category: almuerzo._id,
    //categoria: "Almuerzo",
  },
  {
    name: "Diario Completo Semanal",
    description: "Diario Completo Semanal",
    rate: Math.floor(Math.random() * 6),
    price: 120,
    imgUrl:
      "https://res.cloudinary.com/de8brtp2o/image/upload/v1674530012/siipi/frapusii_l8m5ax.jpg",
    category: almuerzo._id,
    //categoria: "Almuerzo",
  },
  {
    name: "Diario Completo Mensual",
    description: "Diario Completo Mensual",
    rate: Math.floor(Math.random() * 6),
    price: 520,
    imgUrl:
      "https://res.cloudinary.com/de8brtp2o/image/upload/v1674530012/siipi/frapusii_l8m5ax.jpg",
    category: almuerzo._id,
    //categoria: "Almuerzo",
  },
  {
    name: "Café Expreso",
    description: "Café Expreso",
    rate: Math.floor(Math.random() * 6),
    price: 10,
    imgUrl:
      "https://res.cloudinary.com/de8brtp2o/image/upload/v1674530012/siipi/frapusii_l8m5ax.jpg",
    category: bebidasCalientes._id,
    //categoria: "Bebidas Calientes",
  },
  {
    name: "Café Negro",
    description: "Café Negro",
    rate: Math.floor(Math.random() * 6),
    price: 10,
    imgUrl:
      "https://res.cloudinary.com/de8brtp2o/image/upload/v1674530012/siipi/frapusii_l8m5ax.jpg",
    //categoria: "Bebidas Calientes",
  },
  {
    name: "Café con Leche",
    description: "Café con Leche",
    rate: Math.floor(Math.random() * 6),
    price: 12,
    imgUrl:
      "https://res.cloudinary.com/de8brtp2o/image/upload/v1674530012/siipi/frapusii_l8m5ax.jpg",
    category: bebidasCalientes._id,
    //categoria: "Bebidas Calientes",
  },
  {
    name: "Mocka(Chocolate + Café)",
    description: "Mocka(Chocolate + Café)",
    rate: Math.floor(Math.random() * 6),
    price: 15,
    imgUrl:
      "https://res.cloudinary.com/de8brtp2o/image/upload/v1674530012/siipi/frapusii_l8m5ax.jpg",
    category: bebidasCalientes._id,
    //categoria: "Bebidas Calientes",
  },
  {
    name: "Chocolate",
    description: "Chocolate",
    rate: Math.floor(Math.random() * 6),
    price: 15,
    category: bebidasCalientes._id,
    imgUrl:
      "https://res.cloudinary.com/de8brtp2o/image/upload/v1674530012/siipi/frapusii_l8m5ax.jpg",
    //categoria: "Bebidas Calientes",
  },
  {
    name: "Café Supremo",
    description: "Café Supremo",
    rate: Math.floor(Math.random() * 6),
    price: 15,
    category: bebidasCalientes._id,
    imgUrl:
      "https://res.cloudinary.com/de8brtp2o/image/upload/v1674530012/siipi/frapusii_l8m5ax.jpg",
    //categoria: "Bebidas Calientes",
  },
  {
    name: "Café Negro",
    description: "Café Negro",
    rate: Math.floor(Math.random() * 6),
    price: 220,
    category: cafeOrganico._id,
    imgUrl:
      "https://res.cloudinary.com/de8brtp2o/image/upload/v1674530012/siipi/frapusii_l8m5ax.jpg",
    //categoria: "Café Órganico",
  },
  {
    name: "Café Latte",
    description: "Café Latte",
    rate: Math.floor(Math.random() * 6),
    price: 230,
    category: cafeOrganico._id,
    imgUrl:
      "https://res.cloudinary.com/de8brtp2o/image/upload/v1674530012/siipi/frapusii_l8m5ax.jpg",
    //categoria: "Café Órganico",
  },
  {
    name: "Mocha OG",
    description: "Mocha OG",
    rate: Math.floor(Math.random() * 6),
    price: 200,
    category: cafeOrganico._id,
    imgUrl:
      "https://res.cloudinary.com/de8brtp2o/image/upload/v1674530012/siipi/frapusii_l8m5ax.jpg",
    //categoria: "Café Órganico",
  },
  {
    name: "Chocolate OG",
    description: "Chocolate OG",
    rate: Math.floor(Math.random() * 6),
    price: 200,
    category: cafeOrganico._id,
    imgUrl:
      "https://res.cloudinary.com/de8brtp2o/image/upload/v1674530012/siipi/frapusii_l8m5ax.jpg",
    //categoria: "Café Órganico",
  },
  {
    name: "Café Negro Lingzhi",
    description: "Café Negro Lingzhi",
    rate: Math.floor(Math.random() * 6),
    price: 10,
    category: cafeOrganico._id,
    imgUrl:
      "https://res.cloudinary.com/de8brtp2o/image/upload/v1674530012/siipi/frapusii_l8m5ax.jpg",
    //categoria: "Café Órganico",
  },
  {
    name: "DXN Zhi Mocha",
    description: "DXN Zhi Mocha",
    rate: Math.floor(Math.random() * 6),
    price: 15,
    category: cafeOrganico._id,
    imgUrl:
      "https://res.cloudinary.com/de8brtp2o/image/upload/v1674530012/siipi/frapusii_l8m5ax.jpg",
    //categoria: "Café Órganico",
  },
  {
    name: "Lingzhi Coffee",
    description: "Lingzhi Coffee",
    rate: Math.floor(Math.random() * 6),
    price: 12,
    category: cafeOrganico._id,
    imgUrl:
      "https://res.cloudinary.com/de8brtp2o/image/upload/v1674530012/siipi/frapusii_l8m5ax.jpg",
    //categoria: "Café Órganico",
  },
  {
    name: "Cereal de Spirulina",
    description: "Cereal de Spirulina",
    rate: Math.floor(Math.random() * 6),
    price: 18,
    category: cafeOrganico._id,
    imgUrl:
      "https://res.cloudinary.com/de8brtp2o/image/upload/v1674530012/siipi/frapusii_l8m5ax.jpg",
    //categoria: "Café Órganico",
  },
  {
    name: "Cocozhi",
    description: "Cocozhi",
    rate: Math.floor(Math.random() * 6),
    price: 15,
    category: cafeOrganico._id,
    imgUrl:
      "https://res.cloudinary.com/de8brtp2o/image/upload/v1674530012/siipi/frapusii_l8m5ax.jpg",
    //categoria: "Café Órganico",
  },
  {
    name: "Agua Alcalina",
    description: "Agua Alcalina",
    rate: Math.floor(Math.random() * 6),
    price: 6,
    category: embotellados._id,
    imgUrl:
      "https://res.cloudinary.com/de8brtp2o/image/upload/v1674530012/siipi/frapusii_l8m5ax.jpg",
    //categoria: "Embotellados",
  },
  {
    name: "Aloe Vera",
    description: "Aloe Vera",
    rate: Math.floor(Math.random() * 6),
    price: 38,
    category: embotellados._id,
    imgUrl:
      "https://res.cloudinary.com/de8brtp2o/image/upload/v1674530012/siipi/frapusii_l8m5ax.jpg",
    //categoria: "Embotellados",
  },
  {
    name: "Aloe con colágeno",
    description: "Aloe con colágeno",
    rate: Math.floor(Math.random() * 6),
    price: 40,
    category: embotellados._id,
    imgUrl:
      "https://res.cloudinary.com/de8brtp2o/image/upload/v1674530012/siipi/frapusii_l8m5ax.jpg",
    //categoria: "Embotellados",
  },
  {
    name: "Aloe pro Defensas",
    description: "Aloe pro Defensas",
    rate: Math.floor(Math.random() * 6),
    price: 40,
    category: embotellados._id,
    imgUrl:
      "https://res.cloudinary.com/de8brtp2o/image/upload/v1674530012/siipi/frapusii_l8m5ax.jpg",
    //categoria: "Embotellados",
  },
  {
    name: "Aloe con Noni",
    description: "Aloe con Noni",
    rate: Math.floor(Math.random() * 6),
    price: 40,
    category: embotellados._id,
    imgUrl:
      "https://res.cloudinary.com/de8brtp2o/image/upload/v1674530012/siipi/frapusii_l8m5ax.jpg",
    //categoria: "Embotellados",
  },
  {
    name: "Noni",
    description: "Noni",
    rate: Math.floor(Math.random() * 6),
    price: 45,
    category: embotellados._id,
    imgUrl:
      "https://res.cloudinary.com/de8brtp2o/image/upload/v1674530012/siipi/frapusii_l8m5ax.jpg",
    //categoria: "Embotellados",
  },
  {
    name: "Stevia",
    description: "Stevia",
    rate: Math.floor(Math.random() * 6),
    price: 25,
    category: embotellados._id,
    imgUrl:
      "https://res.cloudinary.com/de8brtp2o/image/upload/v1674530012/siipi/frapusii_l8m5ax.jpg",
    //categoria: "Embotellados",
  },
  {
    name: "Mermelada Siipi",
    description: "Mermelada Siipi",
    rate: Math.floor(Math.random() * 6),
    price: 15,
    category: embotellados._id,
    imgUrl:
      "https://res.cloudinary.com/de8brtp2o/image/upload/v1674530012/siipi/frapusii_l8m5ax.jpg",
    //categoria: "Embotellados",
  },
  {
    name: "Jugo Siipi",
    description: "Jugo Siipi",
    rate: Math.floor(Math.random() * 6),
    price: 10,
    category: jugos._id,
    imgUrl:
      "https://res.cloudinary.com/de8brtp2o/image/upload/v1674530012/siipi/frapusii_l8m5ax.jpg",
    //categoria: "Jugos",
  },
  {
    name: "Vitaminado Siipi",
    description: "Vitaminado Siipi",
    rate: Math.floor(Math.random() * 6),
    price: 18,
    category: jugos._id,
    imgUrl:
      "https://res.cloudinary.com/de8brtp2o/image/upload/v1674530012/siipi/frapusii_l8m5ax.jpg",
    //categoria: "Jugos",
  },
  {
    name: "Especial Siipi",
    description: "Especial Siipi",
    rate: Math.floor(Math.random() * 6),
    price: 15,
    category: jugos._id,
    imgUrl:
      "https://res.cloudinary.com/de8brtp2o/image/upload/v1674530012/siipi/frapusii_l8m5ax.jpg",
    //categoria: "Jugos",
  },
  {
    name: "Empanadas Integrales",
    description: "Empanadas Integrales",
    rate: Math.floor(Math.random() * 6),
    price: 6,
    category: masitas._id,
    imgUrl:
      "https://res.cloudinary.com/de8brtp2o/image/upload/v1674530012/siipi/frapusii_l8m5ax.jpg",
    //categoria: "Masitas",
  },
  {
    name: "Queques Saludables",
    description: "Queques Saludables",
    rate: Math.floor(Math.random() * 6),
    price: 6,
    category: masitas._id,
    imgUrl:
      "https://res.cloudinary.com/de8brtp2o/image/upload/v1674530012/siipi/frapusii_l8m5ax.jpg",
    //categoria: "Masitas",
  },
  {
    name: "Pastel de Choclo",
    description: "Pastel de Choclo",
    rate: Math.floor(Math.random() * 6),
    price: 8,
    category: masitas._id,
    imgUrl:
      "https://res.cloudinary.com/de8brtp2o/image/upload/v1674530012/siipi/frapusii_l8m5ax.jpg",
    //categoria: "Masitas",
  },
  {
    name: "Cuñape",
    description: "Cuñape",
    rate: Math.floor(Math.random() * 6),
    price: 10,
    category: masitas._id,
    imgUrl:
      "https://res.cloudinary.com/de8brtp2o/image/upload/v1674530012/siipi/frapusii_l8m5ax.jpg",
    //categoria: "Masitas",
  },
  {
    name: "Bandeja de choclitos",
    description: "Bandeja de choclitos",
    rate: Math.floor(Math.random() * 6),
    price: 25,
    category: masitas._id,
    imgUrl:
      "https://res.cloudinary.com/de8brtp2o/image/upload/v1674530012/siipi/frapusii_l8m5ax.jpg",
    //categoria: "Masitas",
  },
  {
    name: "Bandeja de cuñapes",
    description: "Bandeja de cuñapes",
    rate: Math.floor(Math.random() * 6),
    price: 25,
    category: masitas._id,
    imgUrl:
      "https://res.cloudinary.com/de8brtp2o/image/upload/v1674530012/siipi/frapusii_l8m5ax.jpg",
    //categoria: "Masitas",
  },
  {
    name: "Bandeja mixta choclo y cuñape",
    description: "Bandeja mixta choclo y cuñape",
    rate: Math.floor(Math.random() * 6),
    price: 25,
    category: masitas._id,
    imgUrl:
      "https://res.cloudinary.com/de8brtp2o/image/upload/v1674530012/siipi/frapusii_l8m5ax.jpg",
    //categoria: "Masitas",
  },
  {
    name: "Bandeja de 6 cupcakes",
    description: "Bandeja de 6 cupcakes",
    rate: Math.floor(Math.random() * 6),
    price: 10,
    category: masitas._id,
    imgUrl:
      "https://res.cloudinary.com/de8brtp2o/image/upload/v1674530012/siipi/frapusii_l8m5ax.jpg",
    //categoria: "Masitas",
  },
  {
    name: "Bandeja de 12 cupcakes",
    description: "Bandeja de 12 cupcakes",
    rate: Math.floor(Math.random() * 6),
    price: 20,
    category: masitas._id,
    imgUrl:
      "https://res.cloudinary.com/de8brtp2o/image/upload/v1674530012/siipi/frapusii_l8m5ax.jpg",
    //categoria: "Masitas",
  },
  {
    name: "Té verde",
    description: "Té verde",
    rate: Math.floor(Math.random() * 6),
    price: 16,
    category: matesEmbolsados._id,
    imgUrl:
      "https://res.cloudinary.com/de8brtp2o/image/upload/v1674530012/siipi/frapusii_l8m5ax.jpg",
    //categoria: "Mates Embolsados",
  },
  {
    name: "Moringa",
    description: "Moringa",
    rate: Math.floor(Math.random() * 6),
    price: 8,
    category: matesEmbolsados._id,
    imgUrl:
      "https://res.cloudinary.com/de8brtp2o/image/upload/v1674530012/siipi/frapusii_l8m5ax.jpg",
    //categoria: "Mates Embolsados",
  },
  {
    name: "Cedrón",
    description: "Cedrón",
    rate: Math.floor(Math.random() * 6),
    price: 10,
    category: matesEmbolsados._id,
    imgUrl:
      "https://res.cloudinary.com/de8brtp2o/image/upload/v1674530012/siipi/frapusii_l8m5ax.jpg",
    //categoria: "Mates Embolsados",
  },
  {
    name: "Flor de Jamaica",
    description: "Flor de Jamaica",
    rate: Math.floor(Math.random() * 6),
    price: 20,
    category: matesEmbolsados._id,
    imgUrl:
      "https://res.cloudinary.com/de8brtp2o/image/upload/v1674530012/siipi/frapusii_l8m5ax.jpg",
    //categoria: "Mates Embolsados",
  },
  {
    name: "Cofre de los 10 pergaminos",
    description: "Cofre de los 10 pergaminos",
    rate: Math.floor(Math.random() * 6),
    price: 25,
    category: souvenirs._id,
    imgUrl:
      "https://res.cloudinary.com/de8brtp2o/image/upload/v1674530012/siipi/frapusii_l8m5ax.jpg",
    //categoria: "Souvenirs",
  },
  {
    name: "Bolsa de Papel de regalo",
    description: "Bolsa de Papel de regalo",
    rate: Math.floor(Math.random() * 6),
    price: 5,
    category: souvenirs._id,
    imgUrl:
      "https://res.cloudinary.com/de8brtp2o/image/upload/v1674530012/siipi/frapusii_l8m5ax.jpg",
    //categoria: "Souvenirs",
  },
  {
    name: "Taza de porcelana SIIPI",
    description: "Taza de porcelana SIIPI",
    rate: Math.floor(Math.random() * 6),
    price: 20,
    category: souvenirs._id,
    imgUrl:
      "https://res.cloudinary.com/de8brtp2o/image/upload/v1674530012/siipi/frapusii_l8m5ax.jpg",
    //categoria: "Souvenirs",
  },
  {
    name: "Taza brillosa de porcelana",
    description: "Taza brillosa de porcelana",
    rate: Math.floor(Math.random() * 6),
    price: 40,
    category: souvenirs._id,
    imgUrl:
      "https://res.cloudinary.com/de8brtp2o/image/upload/v1674530012/siipi/frapusii_l8m5ax.jpg",
    //categoria: "Souvenirs",
  },
  {
    name: "Taza metálica grande",
    description: "Taza metálica grande",
    rate: Math.floor(Math.random() * 6),
    price: 55,
    category: souvenirs._id,
    imgUrl:
      "https://res.cloudinary.com/de8brtp2o/image/upload/v1674530012/siipi/frapusii_l8m5ax.jpg",
    //categoria: "Souvenirs",
  },
  {
    name: "Tomatodo recargable",
    description: "Tomatodo recargable",
    rate: Math.floor(Math.random() * 6),
    price: 55,
    category: souvenirs._id,
    imgUrl:
      "https://res.cloudinary.com/de8brtp2o/image/upload/v1674530012/siipi/frapusii_l8m5ax.jpg",
    //categoria: "Souvenirs",
  },
  {
    name: "Bolsa Ecológica SIIPI",
    description: "Bolsa Ecológica SIIPI",
    rate: Math.floor(Math.random() * 6),
    price: 20,
    category: souvenirs._id,
    imgUrl:
      "https://res.cloudinary.com/de8brtp2o/image/upload/v1674530012/siipi/frapusii_l8m5ax.jpg",
    //categoria: "Souvenirs",
  },
  {
    name: "Matera SIIPI",
    description: "Matera SIIPI",
    rate: Math.floor(Math.random() * 6),
    price: 20,
    category: souvenirs._id,
    imgUrl:
      "https://res.cloudinary.com/de8brtp2o/image/upload/v1674530012/siipi/frapusii_l8m5ax.jpg",
    //categoria: "Souvenirs",
  },
  {
    name: "Insumo de Miel",
    description: "Insumo de Miel",
    rate: Math.floor(Math.random() * 6),
    price: 45,
    category: miel._id,
    imgUrl:
      "https://res.cloudinary.com/de8brtp2o/image/upload/v1674530012/siipi/frapusii_l8m5ax.jpg",
    //categoria: "Miel",
  },
  {
    name: "Propóleo en Spray",
    description: "Propóleo en Spray",
    rate: Math.floor(Math.random() * 6),
    price: 38,
    category: miel._id,
    imgUrl:
      "https://res.cloudinary.com/de8brtp2o/image/upload/v1674530012/siipi/frapusii_l8m5ax.jpg",
    //categoria: "Miel",
  },
  {
    name: "Caramelos de Miel",
    description: "Caramelos de Miel",
    rate: Math.floor(Math.random() * 6),
    price: 12,
    category: miel._id,
    imgUrl:
      "https://res.cloudinary.com/de8brtp2o/image/upload/v1674530012/siipi/frapusii_l8m5ax.jpg",
    //categoria: "Miel",
  },
];

const createProducts = async () => {
  try {
    const count1 = Product.estimatedDocumentCount(async (err, count) => {
      if (err) {
        console.log(err);
      } else {
        if (!count) {
          await Product.deleteMany();
          const prod = await Product.create(products);
          //await prod.save();
          console.log("Products Created");
        }
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export default createProducts;
