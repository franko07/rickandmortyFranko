/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Styles from "./Detail.module.css";
import { BiArrowBack } from "react-icons/bi";

export default function Detail(props) {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3001/rickandmorty/character/${id}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [id]);

  return (
    <div className={Styles.divGeneral}>
      <Link to="/home">
        <button className={Styles.buttonBackStyle}>
          <BiArrowBack />
        </button>
      </Link>
      <div className={Styles.cardContent}>
        <div className={Styles.imgName}>
          <h1 className={Styles.h1Character}>{character.name}</h1>
          <img src={character.image} className={Styles.image} />
        </div>
        <div className={Styles.info}>
          <h2 className={Styles.h2}>Status: {character.status}</h2>
          <h2 className={Styles.h2}>Specie: {character.species}</h2>
          <h2 className={Styles.h2}>Gender: {character.gender}</h2>
          <h2 className={Styles.h2}>Origin: {character.origin?.name}</h2>
        </div>
      </div>
    </div>
  );
}
