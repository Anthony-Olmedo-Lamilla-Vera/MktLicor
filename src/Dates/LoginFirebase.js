import { initializeApp } from "firebase/app";

import { getAuth, signInWithRedirect } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDFism3AR-ePVMzQk0ZZpO1kjq9NeYw8so",
  authDomain: "loginmarketlicor.firebaseapp.com",
  projectId: "loginmarketlicor",
  storageBucket: "loginmarketlicor.appspot.com",
  messagingSenderId: "215699219784",
  appId: "1:215699219784:web:add6b5c80a23384ad17f7d",
  measurementId: "G-02CE7W2BL9",
};
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
export const auth = getAuth();

export const LoginAccount = (provider) => {
  const provide = new provider();
  signInWithRedirect(auth, provide)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = provider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = provider.credentialFromError(error);
      // ...
    });
};
