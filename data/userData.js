import User from "../server/models/User.js";

const user = {
  name: "admin",
  email: "admin@admin.com",
  password: "123456",
  isadmin: true,
};


const createUser = async () => {
  try {
    const count = User.estimatedDocumentCount(async (err, count) => {
      if (err) {
        console.log(err);
      } else {
        if (!count) {
          await User.deleteMany();
          const newuser = new User(user);
          await newuser.save();
          console.log("User Created");
        }
      }
    });
  } catch (error) {
    console.log(error);
  }
};


export default createUser;
