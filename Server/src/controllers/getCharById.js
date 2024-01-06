const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

async function getCharById(req, res) {
  try {
    const { id } = req.params;
    const response = await axios(URL + id);
    if (response.data.error) {
      res.status(404).send("Not found");
    } else {
      const { id, name, gender, species, origin, image, status } =
        response.data;
      const character = { id, name, gender, species, origin, image, status };
      res.status(200).json(character);
    }
  } catch (error) {
    res.status(500).send(error.message);
  }
}

module.exports = { getCharById };
