import styled from "styled-components";

const Container = styled.div`
  @media only screen and (max-width: 992px) {
    display: flex;
    justify-content: space-between;
    /* flex-direction: column; */
    background-color: white;
    margin: 10px auto;
    padding-bottom: ${({ showInfo }) => showInfo && "280px"};
  }
  .fatime {
    display: none;
  }
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  text-align: center;
  margin: 10px 10%;
  gap: 10%;
  font-family: "Open Sans", sans-serif !important;
  font-size: 13px;
  /* width: max-content; */

  .main2 {
    width: 70%;
    margin-right: 0;
    gap: 15px;

    @media only screen and (max-width: 992px) {
      display: flex;
      flex-direction: column;
      width: min-content;
    }
  }

  @media only screen and (max-width: 600px) {
  }

  .faBar {
    flex: 1;
    display: none;
    /* position: absolute; */
    @media only screen and (max-width: 992px) {
      display: block;
      transition: all 3s;
      transform: scale(2);
      color: #024570;
    }
  }
`;

const Main = styled.div`
  @media only screen and (max-width: 992px) {
    display: flex;
    position: absolute;
    flex-direction: column;
    justify-content: left;
    align-items: flex-start;
    background-color: white;
    width: 30%;
    left: 110px;
    top: 60px;
    .fatime {
      display: block;
    }
  }

  width: 80%;
  display: flex;
  justify-content: right;
  text-align: center;
  padding: 0.1rem 13px;
  /* margin-left: 15%; */
  gap: 10px;
  align-items: center;

  .not {
    display: none;
  }

  .center {
    @media only screen and (max-width: 992px) {
      display: flex;
      flex-direction: column;
      justify-content: left;
      justify-content: start;
      text-align: left;
    }
  }
`;

const Button = styled.button`
  width: 142px;

  background-color: #f5f9fa;
  color: #024570 !important;
  transition: background-color 0.4s ease-in-out;
  border: none;
  font-size: 15px;
  border-radius: 100px;
  /* width: 150px; */
  padding: 11px 20px;
  font-weight: 700;
  text-transform: uppercase;
  cursor: pointer;
  :hover {
    background-color: #dbecf0;
  }
  @media only screen and (max-width: 992px) {
    font-size: 13px;
    background-color: white;
    padding: 0;
    width: fit-content;
    :hover {
      background-color: white;
    }
  }
`;

const Logo = styled.div`
  @media only screen and (max-width: 992px) {
    flex: 1;
  }
  width: 186px !important;
  margin-right: -7px;
  min-width: 186px;
  cursor: pointer;
  img {
    width: 186px;
  }
`;

const Item = styled.div`
  @media only screen and (max-width: 992px) {
    display: flex;
    align-items: flex-start;
    justify-content: start;
    text-align: left;
    margin: 3px;
    font-size: 13px;
  }
  @media only screen and (max-width: 1200px) {
    font-size: 13px;
  }
  .howit {
    width: 110px;
    display: flex;
  }

  position: relative;
  text-align: center;
  display: flex;
  justify-content: right;
  align-items: center;
  gap: 10px;
  :active{
color: red !important;
  }
  .item {
    background-color: #fff;
    position: absolute;
    z-index: 5;
    top: 40px;
    border-radius: 5px;
    width: 120px !important;
    font-size: 15px;
    display: block;

    padding: 0.25rem 1rem;
    clear: both;
    font-weight: 400;
    color: #212529;
    text-align: inherit;
    white-space: nowrap;
    border: 1px solid gray;
    :hover {
    }
  }
  img {
    width: 10px;
    padding-left: 1px;
  }
  font-weight: 400;
  line-height: 1.5;
  display: flex;
  padding-right: 5px;
  cursor: pointer;
  color: #585858;
  text-align: center;
  font-size: 14px;
  width: max-content;
  .btnjob {
    background-color: #024570;
    color: #fff !important;
    border: none;
    font-size: 14px;
    border-radius: 100px;
    /* padding: 10px 22px; */
    font-weight: 400;
    text-transform: uppercase;
    margin-right: -30px;
    width: 142px;

    cursor: pointer;
    :hover {
      background-color: #0069d9;
    }
    @media only screen and (max-width: 992px) {
      font-size: 13px;
      background-color: white;
      color: #585858 !important;
      :hover {
        background-color: white;
      }
      width: 75px;
      margin-bottom: -15px;
    }
    @media only screen and (max-width: 1200px) {
      font-size: 14px;
      background-color: white;
      color: #585858 !important;
      :hover {
        background-color: white;
      }
    }
  }
  .btn2 {
    background-color: #f7faf5;
    color: #73b743 !important;
    transition: background-color 0.4s ease-in-out;
    :hover {
      background-color: #e3ecdd;
    }
    @media only screen and (max-width: 992px) {
      font-size: 13px;
      background-color: white;
      :hover {
        background-color: white;
      }
    }
    @media only screen and (max-width: 1200px) {
      font-size: 13px;
    }
  }
`;
const Login = styled.div``;
const Link = styled.div`
  /* display: flex; */
  font-weight: 600;
  color: #024570 !important;
  text-transform: uppercase;
  font-size: 14px;
  cursor: pointer;
  width: 60px;
  /* padding-right: 10px; */
  @media (min-width: 992px) and (max-width: 1200px) {
    font-size: 13px;
    gap: 5px;
  }
  @media (max-width: 992px) {
    margin: 0 1.5px;
    padding: 0;
  }
`;
export { Container, Button, Logo, Item, Main, Login, Link };
