// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "rescript/lib/es6/curry.js";
import * as React from "react";
import * as AppModuleCss from "./App.module.css";

var styles = AppModuleCss;

function App(Props) {
  var match = React.useState(function () {
        return 0;
      });
  var setCount = match[1];
  var handle = function (param) {
    return Curry._1(setCount, (function (prev) {
                  return prev + 1 | 0;
                }));
  };
  var msg = "You clicked " + match[0].toString() + " times";
  return React.createElement("div", undefined, React.createElement("h1", {
                  className: styles.header
                }, msg), React.createElement("button", {
                  className: styles.button,
                  onClick: handle
                }, "Click me"));
}

var make = App;

export {
  styles ,
  make ,
  
}
/* styles Not a pure module */
