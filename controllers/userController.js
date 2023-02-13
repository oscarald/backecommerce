import User from "../server/models/User.js";
import generateJWT from "../helpers/generateJWT.js";

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    const allUsers = users.map((user) => ({
      id: user._id,
      name: user.name,
      email: user.email,
      isadmin: user.isadmin ? "Administrador" : "Cliente"
    }));
    return res.send(allUsers);
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
};

const createUser = async (req, res) => {
  const { email } = req.body;
  const emailIsDuplicated = await User.findOne({ email });

  if (emailIsDuplicated) {
    return res.status(400).json({ error: "El email ya esta registrado" });
  }
  try {
    const user = new User(req.body);
    await user.save();
    const userCreated = await User.findOne({ email });
    return res.send({
      id: userCreated._id,
      name: userCreated.name,
      email: userCreated.email,
      isAdmin: userCreated.isadmin,
      token: generateJWT(userCreated._id),
    });

    //return res.send(userSaved);
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
};

const verifyUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send({ error: "Ha ocurrido un problema" });
    }
    if (await user.verifyPassword(password))
      return res.send({
        id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isadmin,
        token: generateJWT(user._id),
      });
    return res.status(404).send({ error: "Contraseña incorrecta" });
  } catch (error) {
    return res.status(404).send({ error: error.message });
  }
};

const profileUser = async (req, res) => {
  const { user } = req;
  return res.send(user);
};

export { getUsers, createUser, verifyUser, profileUser };
