import React from "react";
import {hydrate} from "react-dom";
import App from "./App";

hydrate(<App/>, document.getElementById("root"));

/* Note the use of "render" during development in contrast to "hydrate" which appears to be used only during production, whatever that may means (at the moment of writing this I am yet to learn the specifics of such difference.) */ 

/* Edit: back to hydrate now that the server side rendering has been established (and comphended) */