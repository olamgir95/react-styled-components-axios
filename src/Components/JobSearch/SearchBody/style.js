import styled from "styled-components";

const Container = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  margin: 10px 50px;
  font-family: "Open Sans",sans-serif !important;
 
`;
const Main = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin-top: 10px;
  margin-left: 30px;
  gap: 20px;
  align-items: center;

`;

const Button = styled.button`
  background-color: #F5F9FA;
  color: #024570 !important;
  transition: background-color 0.4s ease-in-out;
  border: none;
  color: #024570;
  font-size: 16px;
  border-radius: 100px;
  padding: 11px 30px;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  :hover{
    background-color: #DBECF0;
  }
`;

const Logo = styled.div`
  width: 186px;
  cursor: pointer;
  img{
    max-width: 100%;
  }
`;

const Item = styled.div`
img{
  width: 10px;
  padding-left: 1px;
}
font-weight: 400;
    line-height: 1.5;
display: flex;
  padding-right: 15px;
  cursor: pointer;
  color: #585858;
  text-align: center;
  font-size: 14px;
  
  .btn2 {
    background-color: #f7faf5;
    color: #73b743 !important;
    transition: background-color 0.4s ease-in-out;
    :hover{
      background-color: #e3ecdd;
    }
  }
`;
const Login = styled.div`
`;
const Link = styled.div`
display: flex;
font-weight: 600;
color: #024570 !important;
text-transform: uppercase;
font-size: 14px;
cursor: pointer;
padding: 0.5rem 1rem;
  margin-right: 10px;
`;
export { Container, Button, Logo, Item, Main, Login, Link };
