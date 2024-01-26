import React, { useState, useRef } from "react";
import Burger from "../Burger/Burger";
import useOnClickOutside from "../../../hooks/useOnClickOutside";
import MenuMobile from "../MenuMobile/MenuMobile";

const Menu = ({ items = [] }) => {
  const [open, setOpen] = useState(false);

  const node = useRef();

  useOnClickOutside(node, () => {
    setOpen(false);
  });

  return (
    <div ref={node}>
      <Burger open={open} setOpen={setOpen} />
      <MenuMobile open={open} />
    </div>
  );
};

export default Menu;
