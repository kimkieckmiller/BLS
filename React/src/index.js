//copied from Lesson 7 instructions
// alert("it's alive");
import React, { component } from 'react';
import { render } from 'react-dom';
import { Home, Mine, Customers } from './screens';
//insert css
import style from './index.css';

const Index = ({ pathname }) => {
  switch(pathname) {
    case "/customers":
      return <Customers />;
    case "/mine":
      return <Mine />;
    default:
      return <Home />;
  }
};

let pathname = window.location.pathname;

render(<div><Index pathname={pathname} /></div>, document.getElementById("root"));

 window.addEventListener("popstate", () => {
  pathname = window.location.pathname;
});