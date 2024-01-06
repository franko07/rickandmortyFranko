import { Link } from "react-router-dom";
import Styles from "./Nav.module.css";
import logo from "../images/logo3.png";
import { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { FaHome } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillBagHeartFill } from "react-icons/bs";

export default function Nav(props) {
  const [id, setId] = useState("");

  function handleChange(event) {
    const { value } = event.target;
    setId(value);
  }
  return (
    <div className={Styles.divGeneral}>
      <img className={Styles.imgLogo} src={logo} alt="" />
      <div className={Styles.divLinkContainer}>
        <Link to="/home">
          <p className={Styles.Link}>
            <FaHome color="white" style={{ marginRight: "2px" }} /> Home
          </p>
        </Link>
        <Link to="/about">
          <p className={Styles.Link}>
            <BsFillPersonFill color="white" style={{ marginRight: "3px" }} />
            About
          </p>
        </Link>
        <Link to="/favorites">
          <p className={Styles.Link}>
            <BsFillBagHeartFill color="white" style={{ marginRight: "3px" }} />
            Favorites
          </p>
        </Link>
      </div>
      <div className={Styles.divButtonContainer}>
        <div className={Styles.add}>
          <input
            className={Styles.inputStyle}
            onChange={handleChange}
            type="search"
            placeholder="Enter id"
          />

          <button
            className={Styles.buttonAddStyle}
            onClick={() => props.onSearch(id)}
          >
            <BsSearch color="white" strokeWidth="0.9" />
          </button>
        </div>
        <button className={Styles.buttonStyle} onClick={() => props.onRandom()}>
          Random
        </button>
        <button className={Styles.buttonStyle} onClick={() => props.logOut()}>
          Log out
        </button>
      </div>
    </div>
  );
}
