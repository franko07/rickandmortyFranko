import "./App.css";
//import Card from "./components/Card.jsx";
import Cards from "./components/Cards/Cards";
//import SearchBar from "./components/SearchBar.jsx";
// import img1 from "./components/images/rick.jpg";
import Nav from "./components/Nav/Nav";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import Error from "./components/Error/Error";
import Form from "./components/Form/Form";
import { useLocation, useNavigate } from "react-router-dom";
import Favorites from "./components/Favorites/Favorites";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  async function onSearch(id) {
    try {
      const response = await fetch(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      const data = await response.json();
      if (data.name) {
        const exists = characters.find((character) => character.id === data.id);
        if (exists) {
          window.alert("El personaje ya fue agregado");
        } else {
          setCharacters((oldChars) => [...oldChars, data]);
        }
      } else {
        window.alert("No hay personajes con ese ID");
      }
    } catch (error) {
      alert(error.message);
    }
  }

  function onClose(id) {
    const filteredChar = characters.filter(
      (character) => character.id !== parseInt(id)
    );
    setCharacters(filteredChar);
  }

  function onRandom() {
    const randomIndex = Math.floor(Math.random() * 826) + 1;
    onSearch(randomIndex);
  }

  function logOut() {
    setAccess(false);
    navigate("/");
  }

  async function login(userData) {
    try {
      const { email, password } = userData;
      const URL = "http://localhost:3001/rickandmorty/login/";
      const { data } = await axios(
        URL + `?email=${email}&password=${password}`
      );
      const { access } = data;
      setAccess(data);
      access && navigate("/home");
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <body className="App" style={{ padding: "20px" }}>
      <div>
        <div className="divFontGeneral">
          {location.pathname !== "/" && (
            <Nav onSearch={onSearch} onRandom={onRandom} logOut={logOut} />
          )}
          {/*{ location.pathname !== "/" ? <NavBar onSearch={onSearch} random={random} logout={logout}/> : undefined} */}
          <Routes>
            <Route path="/" element={<Form login={login} />}></Route>
            <Route
              path="/home"
              element={<Cards characters={characters} onClose={onClose} />}
            ></Route>
            <Route path="/favorites" element={<Favorites />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/detail/:id" element={<Detail />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </div>
      </div>
    </body>
  );
}

export default App;
