import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Footer from "../Components/Footer";
import Home from "../Components/Home";
import JobSearch from "../Components/JobSearch";
import Navbar from "../Components/Navbar";


export const App = () => {
  const [searchText, setSearchText] = useState();
  const location = useLocation();
  const [posts, setPosts] = useState([]);
  const apiEndPoint = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    const getPost = async () => {
      const { data: res } = await axios.get(apiEndPoint);
      setPosts(res);
    };
    ;
    getPost();
  }, []);
  return (
    <>
      <Navbar location={location} />

      <div>
        <Routes>
          <Route
            path="/search"
            element={
              <JobSearch
                searchText={searchText}
                setSearchText={setSearchText}
                posts={posts}
                setPosts={setPosts}
              
              />
            }
          />
          ;
          <Route
            path="/home"
            element={
              <Home searchText={searchText} setSearchText={setSearchText}  posts={posts}
              setPosts={setPosts} />
            }
          />
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          <Route path="/" element={<Navigate to={"/home"} />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
