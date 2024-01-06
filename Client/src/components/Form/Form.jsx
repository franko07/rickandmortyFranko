import React from "react";
import Validation from "../../Validation";
import Styles from "./Form.module.css";
import loginimg from "../images/Loginn.jpg";

export default function Form({ login }) {
  const [userData, setUserData] = React.useState({
    email: "franco11076@gmail.com",
    password: "123456",
  });

  const [errors, setErrors] = React.useState({
    email: "",
    password: "",
  });

  function handleInputChange(event) {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    setErrors(
      Validation({ ...userData, [event.target.name]: event.target.value })
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    login(userData);
  }

  return (
    <div className={Styles.divGeneral}>
      <form className={Styles.formStyle} onSubmit={handleSubmit}>
        <img alt="login" className={Styles.imgStyle} src={loginimg}></img>
        <div>
          <label className={Styles.labelStyle} htmlFor="email">
            Email:
          </label>
          <input
            className={Styles.inputStyle}
            type="text"
            placeholder="email"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
          ></input>
          {errors.email && <p>{errors.email}</p>}
        </div>
        <div>
          <div>
            <label className={Styles.labelStyle} htmlFor="password">
              Password:
            </label>
          </div>
          <input
            className={Styles.inputStyle}
            type="password"
            placeholder="password"
            name="password"
            value={userData.password}
            onChange={handleInputChange}
          ></input>
          {errors.password && <p>{errors.password}</p>}
        </div>
        <div className={Styles.divButtonContainer}>
          <button className={Styles.buttonStyle}></button>
        </div>
      </form>
    </div>
  );
}
