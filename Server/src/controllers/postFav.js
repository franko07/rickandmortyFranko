const { Favorite } = require("../DB_connection");

async function postFav(req, res) {
  const { name, origin, status, image, species, gender, id } = req.body;
  console.log("post", id);
  try {
    if (!name || !origin || !status || !image || !species || !gender || !id) {
      return res.status(401).send("Faltan datos");
    }
    // Se guarda el personaje en la base de datos utilizando el método findOrCreate:
    await Favorite.findOrCreate({
      where: {
        id: id,
        name: name,
        origin: origin,
        status: status,
        image: image,
        species: species,
        gender: gender,
      },
    });

    // Se buscan todos los personajes favoritos guardados en la base de datos:
    const favorites = await Favorite.findAll();

    // Se responde con el arreglo de personajes favoritos:
    return res.status(200).json(favorites);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = postFav;
