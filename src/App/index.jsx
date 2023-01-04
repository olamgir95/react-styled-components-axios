import axios from "axios";
import React, { useState } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Footer from "../Components/Footer";
import Home from "../Components/Home";
import JobSearch from "../Components/JobSearch";
import Navbar from "../Components/Navbar";

export const App = () => {
  const [searchText, setSearchText] = useState("");
  const location = useLocation();
  axios.interceptors.request.use((request)=>{
    console.log(request, 'request');
    request.headers.Authorization='olamgir'
    return request
  })
  axios.interceptors.response.use((res)=>{
    console.log(res, 'res');
  })
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
              />
            }
          />
          ;
          <Route
            path="/home"
            element={
              <Home searchText={searchText} setSearchText={setSearchText} />
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
