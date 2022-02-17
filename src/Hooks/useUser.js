import { FacebookAuthProvider, getRedirectResult } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../Dates/LoginFirebase";

export const useGetuser = () => {
  const [User, setUser] = useState();
  useEffect(() => {
    getRedirectResult(auth)
      .then((result) => {
        const user = result.user;

        setUser(user);
        console.log(user);
      })
      .catch((error) => {
        console.log(error);

        // ...
      });
  }, [User]);
  return { User };
};
