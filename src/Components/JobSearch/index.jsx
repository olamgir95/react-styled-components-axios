import React from "react";

import {
  Buttonn,
  Container,
  Img,
  Search,
  SearchMain,
  Filter,
  Wrapper,
  Input,
  InputWrapper,
  Title,
} from "./style";
import search from "../../asset/icons/search.svg";
import { useLocation, useNavigate } from "react-router-dom";

import { Badge, Button, ButtonGroup } from "react-bootstrap";

const JobSearch = ({ searchText, setSearchText, posts, setPosts }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const onChange = (e) => {
    const res2 = posts.filter((vl) =>
      vl.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setPosts(res2);
    setSearchText(e.target.value);
  };

  return (
    <Container>
      <Search>
        <InputWrapper>
          <Input
            value={searchText}
            placeholder="Search for a job title or company"
            onChange={onChange}
          />
          <Buttonn> Search</Buttonn>
          <Img src={search} />
        </InputWrapper>
        <Wrapper>
          <Filter>
            <p>Job category</p>
            <select name="select" v id="">
              <option value="">Select Category</option>
              <option value="">Office & Admin (Virtual assistant)</option>
              <option value="">Select Category</option>
              <option value="">Select Category</option>
              <option value="">Select Category</option>
              <option value="">Select Category</option>
              <option value="">Select Category</option>
              <option value="">Select Category</option>
              <option value="">Select Category</option>
              <option value="">Select Category</option>
              <option value="">Select Category</option>
            </select>
            <p>Job Sub category</p>
            <select name="select" v id="">
              <option value="">Select Category</option>
            </select>
            <br />
            <hr />
            <p>employment type</p>
            <div className="label-control">
              <input type="checkbox" value />
              <label htmlFor="">FReelance</label> <br />
            </div>
            <div className="label-control">
              <input type="checkbox" value />
              <label htmlFor="">part-time</label> <br />
            </div>
            <div className="label-control">
              <input type="checkbox" value />
              <label htmlFor="">full-time</label> <br />
            </div>
            <Buttonn className="resbtn">Refine search results</Buttonn>
          </Filter>
          <SearchMain>
            {posts?.map((posts) => (
              <Title key={posts.id}>
                <h1>{posts.name}</h1>
                <p>{posts.address.street}</p>
                <ButtonGroup>
                  <Button>Sales and Marketing</Button>
                  <Button>Telemarketing</Button>
                  <Button>Right</Button>
                  <Button>English</Button>
                  <Button>Right</Button>
                </ButtonGroup>
              </Title>
            ))}
          </SearchMain>
        </Wrapper>
      </Search>
    </Container>
  );
};

export default JobSearch;
