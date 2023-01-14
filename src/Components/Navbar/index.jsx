import React, { useEffect, useState } from "react";
import { Container, Button, Logo, Main, Navlink, Link } from "./style";
import blue from "../../asset/imgs/blue.png";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { dataNavbar } from "./data";
import Select from "./Select";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
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
          <Navlink className="center">
            <Navlink
              className={location.pathname.includes("/home") ? "yes" : "yes"}
              to="/search/jobseeker"
            >
              Jobseeker
            </Navlink>
            <Navlink>
              {dataNavbar.map((option, index) => {
                return <Select option={option} key={index} />;
              })}
            </Navlink>

            <Navlink to={`/prices`}>Prices</Navlink>
            <Navlink to="/real">Real Results</Navlink>
            <Navlink to="/Signup">
              <Button
                className={
                  location.pathname.includes("/search") ? "btnjob" : "yes"
                }
              >
                post a job
              </Button>
            </Navlink>
            <Navlink to={"/search"}>
              <Button
                className={
                  location.pathname.includes("/search")
                    ? "not btn2"
                    : "yes btn2"
                }
              >
                find jobs
              </Button>
            </Navlink>
          </Navlink>
          <Navlink
            to={"/Login"}
            className={
              location.pathname.includes("/home") ? "yes" : "not item-br"
            }
          >
            <Link>LOG IN</Link>
          </Navlink>
          <Navlink to="/Signup" className="yes">
            <Link>SIGN UP</Link>
          </Navlink>
          <Navlink
            to={"/Login"}
            className={
              location.pathname.includes("/home") ? "not item-br" : "yes"
            }
          >
            <Link>LOG IN</Link>
          </Navlink>
          <FaTimes className="fatime" onClick={() => setShowInfo(!showInfo)} />
        </Main>
        <FaBars className="faBar" onClick={() => setShowInfo(!showInfo)} />
      </Container>
      <Outlet />
    </>
  );
};

export default Navbar;
