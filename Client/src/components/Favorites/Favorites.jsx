import { Link } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import Card, { mapDispatchToProps } from "../Card/Card";
import { filterCards, orderCards } from "../../redux/actions";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Styles from "./Favorites.module.css";
import { BiArrowBack } from "react-icons/bi";

export default function Favorites() {
  const myFavorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  const handleOrder = (e) => {
    dispatch(orderCards(e.target.value));
  };

  const handleFilter = (e) => {
    dispatch(filterCards(e.target.value));
  };

  return (
    <div>
      <div className={Styles.container}>
        <Link to="/home">
          <button className={Styles.buttonBackStyle}>
            <BiArrowBack />
          </button>
        </Link>
        <div className={Styles.divSelectors}>
          <select
            onChange={handleOrder}
            defaultValue={"Without Order"}
            className={Styles.selectStyle}
          >
            <option value={"Without Order"}>Without Order</option>
            <option value={"A"}>Ascending Order</option>
            <option value={"D"}>Descending Order</option>
          </select>
          <select
            onChange={handleFilter}
            defaultValue={"All"}
            className={Styles.selectStyle}
          >
            <option value={"All"}>All</option>
            <option value={"Male"}>Male</option>
            <option value={"Female"}>Female</option>
            <option value={"Genderless"}>Genderless</option>
            <option value={"unknown"}>unknown</option>
          </select>
        </div>
      </div>
      <div className={Styles.divGeneral}>
        {myFavorites?.map(
          ({ id, name, species, image, gender, origin, status }) => (
            <Card
              key={id}
              id={id}
              name={name}
              species={species}
              image={image}
              gender={gender}
              origin={origin}
              status={status}
            />
          )
        )}
      </div>
    </div>
  );
}
