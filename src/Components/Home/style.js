 
import styled, { createslobalstyle } from "styled-components" ;


 



const Container = styled.div`
  font-family: "Open Sans", sans-serif !important;
  
`;
const Main = styled.div`
  font-size: 48px;
  font-weight: 700;
  line-height: 1.2;
  color: #4c5759 !important;
  text-align: center;
  vertical-align: middle;
  width: 50%;
  letter-spacing: 0.6px;
  min-width: 10rem;
`;
const Input = styled.input`
  margin-top: 20px;
  width: 405px;
  box-shadow: none;
  border: 1px solid #bfcfd9;
  padding: 25px 40px 25px 60px;
  border-radius: 100px;
  font-weight: 300;

  ::placeholder {
    color: grey;
    font-size: 18px;
    font-weight: 300;
  }
`;
const Search = styled.div`
  position: relative;
`;

const Title = styled.div`
  text-align: center;
  margin-top: 50px;
  font-weight: bolder;
  color: #585858;
  font-weight: 400;
  .text-green {
    color: #73b743;
  }
  font-size: 24px;
`;
const Button = styled.button`
  font-weight: 700;
  font-size: 16px;
  background-color: #024570;
  color: #fff !important;
  text-transform: uppercase;
  border-radius: 100px;
  padding: 8px 30px !important;
  border-color: #007bff;
  user-select: none;
  border: 1px solid transparent;

  line-height: 1.5;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  position: absolute;
  right: 14px;
  top: 32px;
  :hover {
    background-color: #0069d9;
    border-color: #0062cc;
    text-decoration: none;
  }
`;
const Img = styled.img`
  width: 30px;
  position: absolute;
  top: 37px;
  left: 22px;
`;
const Section = styled.div`
  margin: 20px 0;
  padding: 40px 0;
  font-family: "Open Sans", sans-serif !important;
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6 !important;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
`;
const Section2 = styled.div`
  margin: 10px 0 200px 0;
  padding: 4px 0 ;
  font-family: "Open Sans", sans-serif !important;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  position: relative;
  
  a{
    color:#4a90e2 ;
    font-size: 24px;
    font-weight: 700;
    position: absolute;
    bottom: -200px;
    :hover{
      color:#054b97eb;
    }
  }
`;
const Section_title = styled.div`
  font-weight: 700;
  letter-spacing: 1px;
  color: #464646;
  font-size: 30px;
  ::after {
    content: " ";
    width: 50px;
    height: 5px;
    background-color: #73b743;
    position: absolute;
    top: 110px;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
  }
`;
const Section_main = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: space-evenly;
  margin-right: 80px;
  position: relative;
`;
const Link = styled.div`
  font-size: 18px;
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 20px;
  padding-left: 20px;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  text-align: left;
  color: #4a90e2;
  background-color: #fff;
  font-family: "Open Sans", sans-serif !important;
  margin-top: 0;
  margin-bottom: 1rem;
  cursor: pointer;

  :hover {
    color: #0056b3;
  }
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 25%;
  max-width: 25%;
  position: relative;
  width: 100%;
  min-height: 1px;
  padding-right: 15px;
  padding-left: 20px;
`;
const Button2 = styled.div`
  font-weight: 700;
  font-size: 16px;
  color: #024570 !important;
  border: 1px solid black;
  background-color: transparent;
  border-width: 1px;
  /* outline: 2px solid #007bff45; */
  transition: all 0.2s ease-in-out;
  text-transform: uppercase;
  border-radius: 100px;
  
  cursor: pointer;
  padding: 15px 40px !important;
  line-height: 1.5;
  
  position: absolute;
  bottom: -100px;
  :hover {
    background-color: #024570;
    border: 1px solid #024570;
    color: #fff !important;
  }
`;
export {
  Container,
  Main,
  Search,
  Title,
  Section_title,
  Input,
  Button,
  Img,
  Section,
  Section2,
  Section_main,
  Link,
  Card,
  Button2,
};
