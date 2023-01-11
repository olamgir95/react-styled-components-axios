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
  :focus {
    outline: 3px solid #007bff45;
  }
  margin-top: 20px;
  background-color: #fafafa;
  font-size: 14px;
  width: 810px;
  box-shadow: none;
  border: none;
  padding: 13px 40px 13px 54px;
  border-radius: 100px;
  font-weight: 300;

  ::placeholder {
    color: lightgrey;
    font-size: 14px;
  }
`;
const InputWrapper = styled.div`
  box-shadow: 0 2px 4px 0 rgb(136 136 136 / 20%);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  margin-bottom: 1px;
  background-color: white;
  height: 100px;
  width: 100%;
`;

const Search = styled.div`
  margin: 0 auto;
  position: relative;
  padding: 10px 20px;
  background-color: white;
  display: flex;
  flex-direction: column;

  width: 80%;
`;

const Buttonn = styled.button`
  :focus {
    outline: 3px solid #007bff45;
  }
  font-weight: 700;
  font-size: 12px;
  background-color: #024570;
  color: #fff !important;
  text-transform: uppercase;
  border-radius: 100px;
  padding: 13px 30px !important;
  margin-right: 10px;
  border-color: #007bff;
  user-select: none;
  border: 1px solid transparent;

  line-height: 1.5;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  position: absolute;
  right: 14px;
  top: 28px;
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
const Filter = styled.div`
  box-shadow: 0 2px 4px 0 rgb(136 136 136 / 20%);
  flex: 0 0 25%;
  max-width: 25%;
  height: 400px;
  background-color: white;
  border-right: 1px solid #dee2e6 !important;

  p {
    display: flex;
    font-size: 12px;
    color: #7c7c7c;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 0.5px;
    align-items: flex-start;
    margin-left: 20px;
  }
  select {
    font-size: 12px;
    height: 30px !important;
    padding: 5px;
    color: #7c7c7c;
    align-items: flex-start;
    margin: 0 auto;
    width: 85%;
    border: 1px solid #ced4da;
    border-radius: 5px;
    :focus {
      outline: 3px solid #007bff45;
      border: 0.7px solid #0069d987;
    }
  }
  hr {
    margin: 20px;
    color: gray;
  }
  input {
    align-items: flex-start;
    margin-left: 20px;
    margin-top: 10px;
  }
  .label-control {
    display: flex;

    align-items: flex-start;
  }
  label {
    margin-top: 10px;
    margin-left: 5px;
    align-items: flex-start;
    color: #7c7c7c;
    text-transform: uppercase;
    font-weight: 550;
    letter-spacing: 0.5px;
  }
  .resbtn {
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    letter-spacing: 0.2px;
    top: 330px;
    bottom: 30px;
    font-size: 12px;
    color: #4a90e2;
    font-weight: 600;
    border: 1px solid #d0d0d0;
    text-align: center;
  }
  position: relative;
`;
const SearchMain = styled.div`
  flex: 1;
  width: 800px;
`;
const Title = styled.div`
  padding-top: 30px;
  box-shadow: 0 2px 4px 0 rgb(136 136 136 / 20%);
  font-size: large;
  gap: 10px;
  width: 800px;
  height: 300px;
`;
const Wrapper = styled.div`
  display: flex;
`;
export {
  Container,
  Search,
  Img,
  Buttonn,
  Input,
  Filter,
  SearchMain,
  Wrapper,
  InputWrapper,
  Title,
};
