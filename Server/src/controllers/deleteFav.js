const { Favorite } = require("../DB_connection");

async function deleteFav(req, res) {
  const { id } = req.params;

  try {
    // Se utiliza el método destroy para eliminar el personaje:
    await Favorite.destroy({ where: { id: id } });

    // Se buscan todos los personajes favoritos guardados en la base de datos:
    const favorites = await Favorite.findAll();
    return res.status(200).json(favorites);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = deleteFav;
