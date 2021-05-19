import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyle } from "./global-styles";
import { App } from "./App";
import { FirebaseContext } from "./context/firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBxGlRTIA8OZb1TWH0dzZSbXiWZwcOireU",
    authDomain: "netflix-clone-3d7b0.firebaseapp.com",
    projectId: "netflix-clone-3d7b0",
    storageBucket: "netflix-clone-3d7b0.appspot.com",
    messagingSenderId: "578523760558",
    appId: "1:578523760558:web:2febcdde1ff8b723aaaa3f",
};

// Initialize Firebase
const firebase = window.firebase.initializeApp(firebaseConfig);
// seedDatabase(firebase)

ReactDOM.render(
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
        <GlobalStyle />
        <App />
    </FirebaseContext.Provider>,
    document.getElementById("root")
);
