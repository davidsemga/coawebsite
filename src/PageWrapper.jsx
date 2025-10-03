import React from "react";
import { CSSTransition } from "react-transition-group";
import "./PageWrapper.css";

function PageWrapper({ children, locationKey }) {
  return (
    <CSSTransition
      in={true}
      appear={true}
      timeout={500}       // transition duration
      classNames="fade"
      key={locationKey}   // ensures transition occurs on route change
    >
      <div className="page-wrapper">{children}</div>
    </CSSTransition>
  );
}

export default PageWrapper;
