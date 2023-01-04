import React, { useEffect } from "react";
import { Container, Button, Logo, Item, Main, Link } from "./style";
import blue from "../../asset/imgs/blue.png"
import angle_down from  "../../asset/icons/solid/angle-down.svg"
import { useLocation, useNavigate } from "react-router-dom";
import { dataNavbar } from "./data";
import Select from "./Select";



const Navbar = () => {
const location= useLocation()

  const navigate=useNavigate()

  return (
    <Container>
        
      <Logo onClick={()=>navigate('/home')}><img src={blue} alt="" /></Logo>
      <Main className={location.pathname.includes("/search")?'main2':'yes'}>
      <Item className={location.pathname.includes("/home")?'not':'yes'} >Jobseeker</Item>
        <Item  >
        {
          
            
           dataNavbar.map((option, index) => {
            return <Select option={option} key={index} />;
          })
        
        
        }
        </Item>
        <Item>Prices</Item>
        <Item>Real Results</Item>
        <Item><Button  className={location.pathname.includes("/search")?'btnjob':'yes'}>post a job</Button></Item>
       <Item> <Button  className={location.pathname.includes("/search")?'not btn2':'yes btn2'}>find jobs</Button></Item>
      <Item className={location.pathname.includes("/search")?'not item-br':'yes'}>
        <Link>LOG IN</Link>
        <Link >SIGN UP</Link>
      </Item>
      <Item className={location.pathname.includes("/home")?'not item-br':'yes'}>
        <Link >SIGN UP</Link>
        <Link>LOG IN</Link>
      </Item>
      </Main>
    </Container>
  );
};

export default Navbar;
