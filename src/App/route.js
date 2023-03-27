import axios from "axios";
import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Home from "../Components/Home";
import JobSearch from "../Components/JobSearch";
import Navbar from "../Components/Navbar";
import { Prices } from "../pages/Prices";
import { Login } from "../pages/Login";
import { Signup } from "../pages/Signup";
import { RealResults } from "../pages/RealResults";
import { Jobseeker } from "../pages/Jobseeker";

function Rout(props) {
  const [searchText, setSearchText] = useState();
  const [posts, setPosts] = useState([]);
  const { REACT_APP_BASE_URL: url } = process.env;
  useEffect(() => {
    axios.get(url).then((response) => {
      setPosts(response.data);
    });
  }, []);
  return (
    <div>
      <Routes>
        <Route
          element={
            <Navbar searchText={searchText} setSearchText={setSearchText} />
          }
        >
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
              <Home
                searchText={searchText}
                setSearchText={setSearchText}
                posts={posts}
                setPosts={setPosts}
              />
            }
          />
          <Route path="/search/jobseeker" element={<Jobseeker />} />
          <Route path={`/prices`} element={<Prices />} />
          <Route path={`/real`} element={<RealResults />} />
          <Route path={`/Signup`} element={<Signup />} />
          <Route path={`/Login`} element={<Login />} />
          <Route path="*" element={<h1>404 NOT FOUND</h1>} />
          <Route path="/" element={<Navigate to={"/home"} />} />
        </Route>
      </Routes>
    </div>
  );
}

export default Rout;
