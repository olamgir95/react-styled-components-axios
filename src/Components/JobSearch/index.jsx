import React, { useEffect } from "react";
import SearchBody from "./SearchBody";


import {
  Button,
  Container,
  Img,
  Search,
  Search_main,
  Sidebar,
  Wrapper,
  Input,
  InputWrapper
} from "./style";
import search from "../../asset/icons/search.svg";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const JobSearch = ({ searchText, setSearchText }) => {
  const navigate = useNavigate();
  const location = useLocation();

useEffect(()=>{
  axios({
    url:'https://boards-api.greenhouse.io/v1/boards/{board_token}/jobs',
method: "POST",
body:"Olamgir"
  }).then((res)=>{
    console.log(res, "axios");
  })
})
  
  return (
    <Container>
     
      <Search>
       <InputWrapper>
       <Input
        value={searchText}
          placeholder="Search for ajob title or company"
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button onClick={() => navigate("/search")}> Search</Button>
        <Img src={search} /></InputWrapper>
        <Wrapper>
          <Sidebar>sidebar</Sidebar>
          <Search_main>search main</Search_main>
        </Wrapper>
      </Search>
    </Container>
  );
};

export default JobSearch;
