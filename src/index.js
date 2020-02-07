import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import PrimerComponenete from "./componentes/PrimerComponenete";
import * as serviceWorker from "./serviceWorker";



//
//ReactDOM.render( '¿que va a imprimir?', '¿donde lo va aimprimir?')
ReactDOM.render(<PrimerComponenete/>, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
