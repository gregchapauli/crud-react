import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDvoCQaKJSvom8HQS3OcY8KFIdONKJyWqo",
  authDomain: "crud-react-29904.firebaseapp.com",
  projectId: "crud-react-29904",
  storageBucket: "crud-react-29904.appspot.com",
  messagingSenderId: "536799829281",
  appId: "1:536799829281:web:55240c0835b72b195ab260",
});

export const auth = app.auth();
export default app;
