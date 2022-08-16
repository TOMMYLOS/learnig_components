import React, { useState } from "react";
import style from "./Formulario.module.css";

function Formulario(props) {
  console.log("est es mi estilo", style.formulario);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const cambiarEmail = (e) => {
    setEmail(e.target.value);
  };

  const cambiarPassword = (e) => {
    setPassword(e.target.value);
  };

  const enviarDatos = (e) => {
    e.preventDefault();
    console.log("enviar");
    console.log(`Email: ${email}, Password: ${password}`);
  };

  return (
    <div className={style.formulario}>
      <form onSubmit={enviarDatos}>
        <h2>Iniciar Sesión</h2>
        <label>
          E-mail:
          <input type={"email"} value={email} onChange={cambiarEmail} />
        </label>
        <label>
          password
          <input type="password" value={password} onChange={cambiarPassword} />
        </label>
        <button type="submit">Ingresar</button>
      </form>
    </div>
  );
}

export default Formulario;
