/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useLocation } from "react-router-dom";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import Styles from "./Card.module.css";
import { BsFillTrash3Fill } from "react-icons/bs";

export function Card(props) {
  const [isFav, setIsFav] = useState(false);
  const location = useLocation();

  useEffect(() => {
    props.myFavorites?.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [props.myFavorites]);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      props.removeFav(props.id);
    } else {
      setIsFav(true);
      props.addFav(props);
    }
  };

  return (
    <div className={Styles.divGeneral}>
      <div className={Styles.divButtonPosition}>
        {isFav ? (
          <button className={Styles.buttonFavStyle} onClick={handleFavorite}>
            🤍
          </button>
        ) : (
          <button className={Styles.buttonFavStyle} onClick={handleFavorite}>
            🤍
          </button>
        )}
        {location.pathname === "/home" && (
          <button className={Styles.buttonStyle} onClick={props.onClose}>
            <BsFillTrash3Fill color="white" size="30" />
          </button>
        )}
      </div>
      <Link className={Styles.linkStyle} to={`/detail/${props.id}`}>
        <h2>{props.name}</h2>
        <img className={Styles.imgBorderStyle} src={props.image} alt="" />
        <div className={Styles.divSeparate}>
          <h2>{props.species}</h2>
          <h2>{props.gender}</h2>
        </div>
      </Link>
    </div>
  );
}

export function mapDispatchToProps(dispatch) {
  return {
    addFav: function (character) {
      dispatch(addFav(character));
    },
    removeFav: function (id) {
      dispatch(removeFav(id));
    },
  };
}

export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
