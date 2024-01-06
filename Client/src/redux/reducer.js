import axios from "axios";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_FAV":
      return { ...state, myFavorites: payload, allCharacters: payload };
    case "REMOVE_FAV":
      return { ...state, myFavorites: payload };
    // case "DELETE_CHARACTER":
    //   return {
    //     ...state,
    //     myFavorites: state.myFavorites.filter(
    //       (character) => character.id !== +payload
    //     ),
    //     allCharacters: state.allCharacters.filter(
    //       (character) => character.id !== +payload
    //     ),
    //   };
    case "FILTER":
      if (payload === "All") {
        return {
          ...state,
          myFavorites: state.allCharacters,
        };
      }
      const filteredCharacters = [...state.allCharacters].filter(
        (character) => character.gender === payload
      );
      return {
        ...state,
        myFavorites: filteredCharacters,
      };
    case "ORDER":
      const filter = [...state.allCharacters].sort((a, b) => {
        if (a.id > b.id) {
          return payload === "A" ? 1 : -1;
        } else if (a.id < b.id) {
          return payload === "D" ? 1 : -1;
        } else {
          return 0;
        }
      });
      /*   const orderedCharacters = [...state.allCharacters];
      if (payload === "A") {
        orderedCharacters.sort((a, b) => a.id - b.id);
      } else if (payload === "D") {
        orderedCharacters.sort((a, b) => b.id - a.id);
      } */
      return {
        ...state,
        myFavorites: filter,
      };
    default:
      return { ...state };
  }
};

export default rootReducer;
