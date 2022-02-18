import {
  FacebookAuthProvider,
  getRedirectResult,
  onAuthStateChanged,
} from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../Dates/LoginFirebase";

export const useGetuser = () => {
  const [User, setUser] = useState();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log(User);
        setUser(user);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, [User]);
  return { User };
};
