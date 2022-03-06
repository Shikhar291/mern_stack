import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home";

import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Login from "./components/login";
import Header from "./components/header";

import EventHandling from "./components/eventhandling";
import Gallery from "./components/gallery";
import { createTheme, getFormControlLabelUtilityClasses, ThemeProvider } from "@mui/material";
import { useState } from "react";
import ListProducts from "./components/listproducts";
import Signup from "./components/signUp";
import Addproduct from "./components/addProduct";
import ManageProduct from "./components/manageProduct";
import { UserProvider } from "./userContext";
import Chat from "./components/chat";

function App() {
  
  const [darktheme, setDarktheme] = useState(false);

  const themeA = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1976d2",
      },
      success: {
        main: "#00ffb3",
        dark: "#ccad00",
      },
    },
    typography: {
      button: {
        textDecorationColor: "ActiveBorder",
      },
    },
  });

  
  const themeB = createTheme({
    palette: {
      mode: "light",
    },
  });

  return (
    <div>
      <UserProvider>
      <ThemeProvider theme={darktheme ? themeA : themeB}>
        <BrowserRouter>
          <Header darktheme={darktheme} setDarktheme={setDarktheme}></Header>
          <Routes>
            <Route element={<Home></Home>} path="/home" />
            <Route element={<Login />} path="/login" />
            <Route element={<EventHandling />} path="/event" />
            <Route element={<Signup></Signup>} path="/signup"></Route>
            <Route element={<Gallery />} path="/gallery" />
            <Route element={<ListProducts></ListProducts>} path="/listproducts"></Route>
            <Route element={<Addproduct></Addproduct>} path="/addproduct"></Route>
            <Route element={<ManageProduct></ManageProduct>} path="/manageproduct"></Route>
            <Route element={<Chat></Chat>} path="/chat"></Route>
          </Routes>

        </BrowserRouter>
      </ThemeProvider>
      </UserProvider>
    </div>
  );
}

export default App;
