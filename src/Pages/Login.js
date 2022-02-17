import {
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import React from "react";
import { AiFillFacebook, AiFillGithub } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";
import { auth, LoginAccount } from "../Dates/LoginFirebase";
import { useGetuser } from "../Hooks/useUser";

function Login() {
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
              <input placeholder="Correo Electronico" type="text" />
            </div>
            <div className="form-login-input">
              <label htmlFor=""> Contraseña *</label>
              <input placeholder="Contraseña" type="password" />
            </div>
            <button>Inicia Sesion</button>
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
          <article>
            <p>Bienvenido {User.displayName} </p>
            <img src={User.photoURL} width="250" alt="" />
          </article>
        ) : (
          ""
        )}
      </main>
    </>
  );
}

export default Login;
