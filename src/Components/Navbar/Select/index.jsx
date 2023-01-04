import React, { useEffect, useState } from "react";
import { Footer_menu, Link } from "../../Footer/style";
import { Item } from "../style";
import down from "../../../asset/icons/solid/angle-down.svg";
import { useLocation } from "react-router-dom";

const Select = ({ option }) => {
  const {pathname} =useLocation()
  const [showInfo, setShowInfo] = useState(false);
  const { data, name } = option;
  useEffect(() => {
    setShowInfo(false);
  }, [pathname]);
  
  const visibleDiv = {
    display: "block",
  };

  const unvisibleDiv = {
    display: "none",
  };

  return (
    <Item onClick={() => setShowInfo(!showInfo)}>
      {name}
      <img src={down} alt="arrow-icon" />

      <Item className="item" style={showInfo ? visibleDiv : unvisibleDiv}>
        {data?.map((item, index) => {
          return <Link key={index}>{item.link}</Link>;
        })}
      </Item>
    </Item>
  );
};
export default Select;
