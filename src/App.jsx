import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Docters from "./pages/Doctors";
import About from "./pages/About";
import Appoinment from "./pages/Appoinment";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import MyAppoinment from "./pages/MyAppoinment";
import MyProfile from "./pages/MyProfile";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      {/* this is navebar, we write here because we want navbar in all Rounts */}
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/docters/:id" element={<Docters></Docters>}></Route>
        <Route path="/docters" element={<Docters></Docters>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route
          path="/appointment/:docId"
          element={<Appoinment></Appoinment>}
        ></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route
          path="/myappoinment"
          element={<MyAppoinment></MyAppoinment>}
        ></Route>
        <Route path="/myprofile" element={<MyProfile></MyProfile>}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
};

export default App;
