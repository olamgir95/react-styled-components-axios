import React, { useState } from "react";
import { Container, Logo, Item, Footer_menu, Show } from "./style";
import blue2 from "../../asset/imgs/blue2.png";
import FooterDetail from "../Footer/FooterDetail/data";

import Select from "./Select";
import { Outlet } from "react-router-dom";

const Footer = () => {
  return (
    <>
   
    <Container>
      <Footer_menu>
        {FooterDetail.map((option, index) => {
          return <Select option={option} key={index} />;
        })}
      </Footer_menu>
      <Logo>
        <img src={blue2} alt="" />
        Copyright © 2022 OnlineJobs.ph. All rights reserved.
      </Logo>
    </Container>
    <Outlet/>
    </>
  );
};

export default Footer;
