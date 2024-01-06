const { User } = require("../DB_connection");

async function login(req, res) {
  const { email, password } = req.query;
  if (!email || !password) {
    return res.status(400).json("Faltan datos");
  }
  try {
    // Se busca al usuario por email:
    const user = await User.findOne({ where: { email: email } });

    // Se verifica si el usuario no fue encontrado:
    if (!user) {
      return res.status(404).send("Usuario no encontrado");
    }

    // Se compara la contraseña recibida con la contraseña correcta:
    if (user.password !== password) {
      return res.status(403).send("Contraseña incorrecta");
    }

    // Si las contraseñas coinciden, se da el acceso:
    return res.status(200).json({ access: true });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = login;
