import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import React, { useState } from "react";
import { AiFillFacebook, AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import {
  auth,
  CreateEmailContraseña,
  LoginAccount,
  LoginUserPassword,
} from "../Dates/LoginFirebase";
import { useGetuser } from "../Hooks/useUser";

function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const { User } = useGetuser();

  function Logout() {
    signOut(auth).then(() => {
      console.log("sesion cerrada ");
      window.location.reload();
    });
  }

  return (
    <>
      <main>
        <div className="cont-card-sesion">
          <header className="head-login">
            <h1>Inicia sesion </h1>
          </header>
          <form action="">
            <div className="form-login-input">
              <label htmlFor=""> Correo Electronico</label>
              <input
                value={Email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Correo Electronico"
                type="text"
              />
            </div>
            <div className="form-login-input">
              <label htmlFor=""> Contraseña *</label>
              <input
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Contraseña"
                type="password"
              />
            </div>
            <button
              onClick={(e) => {
                CreateEmailContraseña(e, Email, Password);
              }}
            >
              Crear Usuario
            </button>
            <button
              onClick={(e) => {
                LoginUserPassword(e, Email, Password);
              }}
            >
              Login Usuario
            </button>
          </form>

          <p>o Inicia sesion con :</p>

          <nav>
            <li>
              <button onClick={() => LoginAccount(FacebookAuthProvider)}>
                <AiFillFacebook />
              </button>
            </li>
            <li>
              <button onClick={() => LoginAccount(GoogleAuthProvider)}>
                <FcGoogle />
              </button>
            </li>
            <li>
              <button onClick={() => LoginAccount(GithubAuthProvider)}>
                <AiFillGithub />
              </button>
            </li>
          </nav>
        </div>

        {User ? (
          <div>
            <p>
              Bienvenido {User.displayName} {User.email}
            </p>
            <img src={User.photoURL} width="250" alt="" />
          </div>
        ) : (
          ""
        )}
        <button onClick={Logout}>Cerrar Sesion</button>
      </main>
    </>
  );
}

export default Login;
