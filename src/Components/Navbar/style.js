import styled from "styled-components";

const Container = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  margin: 10px 50px;
  font-family: "Open Sans", sans-serif !important;
  .main2{
    width: 70%;
    margin-left:200px !important;
    gap:15px;
    
    
  }
`;
const Main = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  margin-top: 10px;
  margin-left: 100px;
  gap: 15px;
  align-items: center;
  .not {
    display: none;
    visibility: hidden;
    
  }
`;

const Button = styled.button`
  background-color: #f5f9fa;
  color: #024570 !important;
  transition: background-color 0.4s ease-in-out;
  border: none;
  color: #024570;
  font-size: 14px;
  border-radius: 100px;
  padding: 11px 30px;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  :hover {
    background-color: #dbecf0;
  }
`;

const Logo = styled.div`
  width: 186px;
  cursor: pointer;
  img {
    max-width: 100%;
  }
`;

const Item = styled.div`
position: relative;
.item{
  background-color: #fff;
  position: absolute;
  z-index: 5;
  top: 40px;
  border-radius: 5px;
  width: 120px !important;
  font-size: 14px;
  display: block;
    width: 100%;
    padding: 0.25rem 1.5rem;
    clear: both;
    font-weight: 400;
    color: #212529;
    text-align: inherit;
    white-space: nowrap;
     border: 1px solid gray;
  :hover{

  }
  
}
img {
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

.btnjob {
  background-color: #024570;
  color:#fff !important;
  transition: background-color 0.4s ease-in-out;
  border: none;
  font-size: 16px;
  border-radius: 100px;
  padding: 9px 24px;
  font-weight: 400;
  text-transform: uppercase;
  margin-right: -40px;
  cursor: pointer;
  :hover {
    background-color: #0069d9;
  }
}
.btn2 {
  background-color: #f7faf5;
  color: #73b743 !important;
  transition: background-color 0.4s ease-in-out;
  :hover {
    background-color: #e3ecdd;
  }
}
`;
const Login = styled.div``;
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
