import React from "react";
import { StyledBurger } from "./style";

const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div className="barOne div" />
      <div className="barTwo div" />
      <div className="barThree div" />
    </StyledBurger>
  );
};

export default Burger;
