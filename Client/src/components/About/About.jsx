import React from "react";
import Styles from "./About.module.css";
import { BiArrowBack } from "react-icons/bi";
import { Link } from "react-router-dom";
import perfil from "../images/frankoperfil.jpg";
import { FaLinkedin } from "react-icons/fa";
import { BsGithub } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { FaCss3Alt } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { SiSequelize } from "react-icons/si";
import { FaHtml5 } from "react-icons/fa";

export default function About(props) {
  return (
    <div className={Styles.divGeneral}>
      <Link to="/home">
        <button className={Styles.buttonBackStyle}>
          <BiArrowBack />
        </button>
      </Link>
      <div className={Styles.izquierda}>
        <p className={Styles.pfranco}>ALEXANDER FRANCO.</p>

        <img alt="Franco" src={perfil} className={Styles.image} />

        <p className={Styles.pFullStack}>Full Stack Developer</p>
        <div className={Styles.botones}>
          <Link
            to="https://www.linkedin.com/in/alex-franco-9032b01ab/"
            target="_blank"
          >
            <button className={Styles.buttonSocials1}>
              <FaLinkedin color="#0077b7" />
            </button>
          </Link>
          <Link to="https://github.com/franko07" target="_blank">
            <button className={Styles.buttonSocials2}>
              <BsGithub />
            </button>
          </Link>
        </div>
      </div>
      <div className={Styles.derecha}>
        <p className={Styles.pApp}>
        ¡Hola! Esta aplicación fue creada utilizando los conocimientos adquiridos durante
          mi formación como Full Stack Developer en Henry. te invito a encontrar
          y guarda tus personajes favoritos en esta aplicación dedicada a Rick y
          Fanáticos de Morty. <br />
          <br />
          Esta aplicación fue construida utilizando las siguientes herramientas:
        </p>
        <FaReact className={Styles.tool} color="#07bcd8" />
        <TbBrandRedux className={Styles.tool} color="#764abc" />
        <IoLogoJavascript className={Styles.tool} color="#f2bf26" />
        <DiNodejs className={Styles.tool} color="#61b348" />
        <FaHtml5 className={Styles.tool} color="#e44d25" />
        <FaCss3Alt className={Styles.tool} color="#2062af" />
        <SiSequelize className={Styles.tool} color="#31426F" />
      </div>
    </div>
  );
}
