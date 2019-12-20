import React from "react";
import "./Die.css";

 const Die = (props) => {
    const {locked, handleClick, val} = props
    return (
      <button 
        className={"Die"}
        style={{ backgroundColor: locked ? "grey" : "black" }}
        onClick={handleClick}
      >
        {val}
      </button>
    );
  }


export default Die;
