import styled from "styled-components";

const Container = styled.div`
    background-color: #f3f7fa;
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  text-align: center;
  margin: 10 50px;
  font-family: "Open Sans", sans-serif !important;
  padding: 50px 0;
  height: 100%;
`;
const Input = styled.input`

outline: none;
 :focus{
 outline: 2px solid #007bff45;}
 margin-top: 20px;
 background-color: #fafafa;
    font-size: 14px;
  width: 810px;
  box-shadow: none;
  border: none;
  padding: 12px 40px 12px 54px;
  border-radius: 100px;
  font-weight: 300;

  ::placeholder {
    color: lightgrey;
    font-size: 14px;
    
  }
`;
const InputWrapper=styled.div`
box-shadow: 0 2px 4px 0 rgb(136 136 136 / 20%);
border-top-left-radius: 10px;
border-top-right-radius: 10px;
margin-bottom: 1px;
background-color: white;
height: 100px;
width: 100%;
`

const Search = styled.div`
margin: 0 auto;
  position: relative;
  padding: 10px 20px;
    background-color: white;
    display: flex;
    flex-direction: column;
   
  width: 80%;
`;

const Button = styled.button`
  font-weight: 700;
  font-size: 12px;
  background-color: #024570;
  color: #fff !important;
  text-transform: uppercase;
  border-radius: 100px;
  padding: 12px 30px !important;
  margin-right: 10px;
  border-color: #007bff;
  user-select: none;
  border: 1px solid transparent;

  line-height: 1.5;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  position: absolute;
  right: 14px;
  top: 27px;
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
  left: 82px;
`;
const Sidebar = styled.div`
  box-shadow: 0 2px 4px 0 rgb(136 136 136 / 20%);
  flex: 1;
  height: 400px;
  background-color: white;
`;
const Search_main = styled.div`
  box-shadow: 0 2px 4px 0 rgb(136 136 136 / 20%);
  flex: 3;
  height: 400px;
  background-color: white;
`;
const Wrapper = styled.div`
  display: flex;
`;
export { Container, Search, Img, Button, Input, Sidebar, Search_main, Wrapper, InputWrapper};
