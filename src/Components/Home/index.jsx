import React from "react";

import {
  Container,
  Main,
  Link,
  Search,
  Card,
  Section_title,
  Title,
  Input,
  Button,
  Img,
  Section,
  Section2,
  Section_main,
  Button2
} from "./style";
import search from "../../asset/icons/search.svg";
import { useNavigate } from "react-router-dom";


const Home = ({searchText, setSearchText, posts, setPosts }) => {
  const navigate=useNavigate();

  const onChange = (e) => {
    const res = posts.filter((vl) =>
      vl.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setPosts(res);
    setSearchText(e.target.value);
  };
  console.log(searchText);
  return (
    <Container>
      <Section>
        <Main>The Job Board for Virtual Workers in the Philippines.</Main>
        <Title>
          Looking for <strong className="text-green">Work</strong>?
        </Title>
        <Search>
          <Input value={searchText} placeholder="Search jobs" onChange={onChange} />
          <Button onClick={()=>navigate('/search')}> Search</Button>
          <Img src={search} />
        </Search>
      </Section>
      <Section2>
        <Section_title>
          <h2>Common Talent Searches</h2>
        </Section_title>
        <Section_main>
          <Card>
            <Link>Virtual Assistant</Link>
            <Link>Virtual Assistant</Link>
            <Link>Virtual Assistant</Link>
            <Link>Virtual Assistant</Link>
            <Link>Virtual Assistant</Link>
            <Link>Virtual Assistant</Link>
            <Link>Virtual Assistant</Link>
            <Link>Virtual Assistant</Link>
          </Card>
          <Card>
            <Link>Copywriter</Link>
            <Link>Webmaster</Link>
            <Link>PPC Expert</Link>
            <Link>Researcher</Link>
            <Link>Accountant</Link>
            <Link>Ecommerce Expert</Link>
            <Link>iOS Developer</Link>
            <Link>Photoshop Expert</Link>
          </Card>
          <Card>
            <Link>Virtual Assistant</Link>
            <Link>Virtual Assistant</Link>
            <Link>Virtual Assistant</Link>
            <Link>Virtual Assistant</Link>
            <Link>Virtual Assistant</Link>
            <Link>Virtual Assistant</Link>
            <Link>Virtual Assistant</Link>
            <Link>Virtual Assistant</Link>
          </Card>
          <Card>
            <Link>Copywriter</Link>
            <Link>Webmaster</Link>
            <Link>PPC Expert</Link>
            <Link>Researcher</Link>
            <Link>Accountant</Link>
            <Link>Ecommerce Expert</Link>
            <Link>iOS Developer</Link>
            <Link>Photoshop Expert</Link>
          </Card>
        </Section_main>
        <Button2 className="btnsee">See More skills</Button2>
        <a href="">Why?</a>
      </Section2>
      
    </Container>
  );
};

export default Home;
