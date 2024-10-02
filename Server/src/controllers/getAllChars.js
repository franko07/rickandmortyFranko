const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character/";

async function getAllChars(req, res) {
    try {
      const response = await axios(URL);
      if (response.data.error) {
        res.status(404).send("Not found");
      } else {
        const characters = response.data.results.map((char) => {
          const { id, name, gender, species, origin, image, status } = char;
          return { id, name, gender, species, origin, image, status };
        });
        res.status(200).json(characters);
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  }

module.exports = { getAllChars };