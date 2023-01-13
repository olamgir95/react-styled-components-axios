import React, { useEffect, useState } from "react";
import { Container, Button, Logo, Item, Main, Link } from "./style";
import blue from "../../asset/imgs/blue.png";
import { Outlet, useLocation, useNavigate,  } from "react-router-dom";
import { dataNavbar } from "./data";
import Select from "./Select";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = ({curr}) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [showInfo, setShowInfo] = useState(false);

  useEffect(() => {
    setShowInfo(false);
  }, [location.pathname]);

  const visibleDiv = {
    display: "none",
  };

  const unvisibleDiv = {
    display: "flex",
  };
 
  return (
    <>
      <Container showInfo={!showInfo}>
        <Logo onClick={() => navigate("/home")}>
          <img src={blue} alt="" />
        </Logo>
        <Main
          style={showInfo ? visibleDiv : unvisibleDiv}
          className={location.pathname.includes("/search") ? "main2" : "yes"}
        >
          <Item className="center">
            <Item
              className={location.pathname.includes("/home") ? "not" : "yes"}
              onClick={() => navigate("/search/jobseeker")}
            >
              Jobseeker
            </Item>
            <Item>
              {dataNavbar.map((option, index) => {
                return <Select option={option} key={index} />;
              })}
            </Item>

            <Item onClick={() => navigate(`/${curr}/prices`)}>Prices</Item>
            <Item onClick={() => navigate('/real')}>Real Results</Item>
            <Item>
              <Button onClick={() => navigate("/Signup")} 
                className={
                  location.pathname.includes("/search") ? "btnjob" : "yes"
                }
              >
                post a job
              </Button>
            </Item>
            <Item>
              <Button onClick={() => navigate("/search")}
                className={
                  location.pathname.includes("/search")
                    ? "not btn2"
                    : "yes btn2"
                }
              >
                find jobs
              </Button>
            </Item>
          </Item>
          <Item
            className={
              location.pathname.includes("/home") ? "yes" : "not item-br"
            }
          >
            <Link onClick={() => navigate("/Login")}>LOG IN</Link>
          </Item>
          <Item className="yes">
            <Link onClick={() => navigate("/Signup")}>SIGN UP</Link>
          </Item>
          <Item
            className={
              location.pathname.includes("/home") ? "not item-br" : "yes"
            }
          >
            <Link onClick={() => navigate("/Login")}>LOG IN</Link>
          </Item>
          {/* <Item
          className={
            location.pathname.includes("/home") ? "yes" : "not item-br"
          }
        >
          <Link onClick={() => navigate("/Signup")}>SIGN UP</Link>
        </Item> */}
          <FaTimes className="fatime" onClick={() => setShowInfo(!showInfo)} />
        </Main>
        <FaBars className="faBar" onClick={() => setShowInfo(!showInfo)} />
      </Container>
      <Outlet />
    </>
  );
};

export default Navbar;
