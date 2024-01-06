const server = require("../src/app");
const session = require("supertest");
const agent = session(server);

describe("Test de rutas", () => {
  describe("GET /rickandmorty/character/:id", () => {
    it("Responde con status: 200", async () => {
      await agent.get("/rickandmorty/character/1").expect(200);
    });
    it("Si hay un error responde con status: 500", async () => {
      await agent.get("/rickandmorty/character/asd").expect(500);
    });
    it("Responde un objeto con las propiedades: id, name, species, gender, status, origin e image", async () => {
      const response = (await agent.get("/rickandmorty/character/1")).body;

      const character = [
        "id",
        "name",
        "species",
        "gender",
        "status",
        "origin",
        "image",
      ];

      const keys = Object.keys(response);
      character.forEach((atribute) => {
        expect(keys).toContain(atribute);
      });
    });
  });
  describe("GET /rickandmorty/login", () => {
    it("Debe devolver true si la información de login es correcta", async () => {
      const response = (
        await agent.get(
          "/rickandmorty/login/?email=nataliasofiaroni@gmail.com&password=Hola$123"
        )
      ).body;
      expect(response.access).toEqual(true);
    });
    it("Debe devolver false si la información de login es incorrecta", async () => {
      const response = (
        await agent.get(
          "/rickandmorty/login/?email=natalia@gmail.com&password=Hola123"
        )
      ).body;
      expect(response.access).toEqual(false);
    });
  });
  describe("POST /rickandmorty/fav", () => {
    const char1 = { id: 1, name: "Rick Sanchez" };
    const char2 = { id: 2, name: "Morty Smith" };
    it("Debe devolver un arreglo con el objeto enviado por body", async () => {
      const response = (await agent.post("/rickandmorty/fav").send(char1)).body;
      expect(response).toContainEqual(char1);
    });

    it("Debe devolver un arreglo que incluye los elementos previamente enviados", async () => {
      const response = (await agent.post("/rickandmorty/fav").send(char2)).body;
      expect(response).toContainEqual(char1);
      expect(response).toContainEqual(char2);
    });
  });
  describe("DELETE /rickandmorty/fav/:id", () => {
    const char1 = { id: 1, name: "Rick Sanchez" };
    const char2 = { id: 2, name: "Morty Smith" };
    it("Debe devolver el mismo arreglo si no se eliminar ningún personaje", async () => {
      const response = (await agent.delete("/rickandmorty/fav/123")).body;
      expect(response).toContainEqual(char1);
      expect(response).toContainEqual(char2);
    });
    it("Debe eliminar el personaje indicado por el id", async () => {
      const response = (await agent.delete("/rickandmorty/2")).body;
      expect(response).not.toContainEqual(char2);
    });
  });
});
