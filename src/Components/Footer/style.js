import styled from "styled-components";

const Container = styled.div`
  margin-top: 250px;
  display: flex;
  flex-direction: column;
`;
const Footer_menu = styled.div`
flex-wrap: wrap;
  display: flex;
  justify-content: center;
  text-align: left;
  align-items: center;
  gap: 20px;
    color: #024570;
  font-size: 18px;
  font-weight: 600;
  text-transform: uppercase;
  background-color: #f3f7fa;
  padding:0.5rem 1rem;
  @media only  screen and (max-width: 990px) {
    justify-content: left;
  }
`;

const Logo = styled.div`
  padding: 10px;
  display: flex;
  padding-left: 80px;
  text-align: center;
  vertical-align: middle;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  img {
    max-width: 100%;
  }
`;

const Item = styled.div`
color:  #024570;
  display: flex;
    flex-direction: column;
  position: relative;


  
  img {
    position: absolute;
    right: -15px;
    width: 10px;
    transition: all 0.1s;
  }
  a {
    img {
      display: flex;
      flex-direction: row;
      position: relative;
    }
  }
  cursor: pointer;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.5;
  font-family: "Open Sans", sans-serif !important;
 
  text-transform: uppercase;
  text-align: left;
 
`;
const Link = styled.div`

font-size: 13px;
    color: #4b4b4b;
    text-transform: capitalize;
    margin: 10px;
    transition: all 4s ease-in-out;
`;
export { Container, Logo, Item, Footer_menu, Link };
