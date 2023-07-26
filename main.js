import "./styles.scss";

/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ () => {
        eval("\n\n//# sourceURL=webpack://node-starter/./src/index.js?");

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/
  /******/ // startup
  /******/ // Load entry module and return exports
  /******/ // This entry module can't be inlined because the eval devtool is used.
  /******/ var __webpack_exports__ = {};
  /******/ __webpack_modules__["./src/index.js"]();
  /******/
  /******/
})();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlWOrEF184l4o8jwnPfAx8Fs-ugqu9nVs",
  authDomain: "case-study-66fcd.firebaseapp.com",
  projectId: "case-study-66fcd",
  storageBucket: "case-study-66fcd.appspot.com",
  messagingSenderId: "228693940237",
  appId: "1:228693940237:web:1f14d119651ebb9077dd44",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const myModal = new mdb.Modal(document.getElementById("myModal"), options);
