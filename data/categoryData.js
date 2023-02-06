import Category from "../server/models/Category.js";

const categories = [
  {
    name: "Almuerzo",
    imgUrl: "https://res.cloudinary.com/de8brtp2o/image/upload/v1675657702/siipi/almuerzo_m37afi.png",
  },
  {
    name: "Bebidas Calientes",
    imgUrl: "https://res.cloudinary.com/de8brtp2o/image/upload/v1675657702/siipi/bebidas_calientes_stvnqi.png",
  },
  {
    name: "Café Órganico",
    imgUrl: "https://res.cloudinary.com/de8brtp2o/image/upload/v1675657702/siipi/cafe-organico_qk5azx.png",
  },
  {
    name: "Embotellados",
    imgUrl: "https://res.cloudinary.com/de8brtp2o/image/upload/v1675657702/siipi/embotellados_ojc7s1.png",
  },
  {
    name: "Jugos",
    imgUrl: "https://res.cloudinary.com/de8brtp2o/image/upload/v1675657702/siipi/jugos_fj2hkh.png",
  },
  {
    name: "Masitas",
    imgUrl: "https://res.cloudinary.com/de8brtp2o/image/upload/v1675657702/siipi/masitas_fqe4zk.png",
  },
  {
    name: "Mates Embolsados",
    imgUrl: "https://res.cloudinary.com/de8brtp2o/image/upload/v1675657703/siipi/mates-embolsados_a62n1g.png",
  },
  {
    name: "Miel",
    imgUrl: "https://res.cloudinary.com/de8brtp2o/image/upload/v1675657703/siipi/miel_xdy7cb.png",
  },
  {
    name: "Souvernirs",
    imgUrl: "https://res.cloudinary.com/de8brtp2o/image/upload/v1675657703/siipi/souvenir_tggq1z.png",
  },
  {
    name: "Mates a granel",
    imgUrl: "https://res.cloudinary.com/de8brtp2o/image/upload/v1675657703/siipi/te-embolsado_itl7pc.png",
  },

];


const createCategory = async () => {
  try {
    const count1 = Category.estimatedDocumentCount(async (err, count) => {
      if (err) {
        console.log(err);
      } else {
        if (!count) {
          await Category.deleteMany();
          const cat = Category.create(categories);
          //await prod.save();
          console.log("Categories Created");
        }
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export default createCategory;
