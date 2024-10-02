import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllChars } from "./actions";

const CharactersList = () => {
  const dispatch = useDispatch();
  const characters = useSelector((state) => state.characters);

  useEffect(() => {
    dispatch(getAllChars());
  }, [dispatch]);

  return (
    <div>
      {characters.map((char) => (
        <div key={char.id}>
          <h2>{char.name}</h2>
          <img src={char.image} alt={char.name} />
        </div>
      ))}
    </div>
  );
};

export default CharactersList;