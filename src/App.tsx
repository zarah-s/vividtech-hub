import React from "react";
import HomeScreen from "./pages/home/views/HomeScreen";
import { Route, Routes } from "react-router-dom";
import RoutesPath from "./constants/Routes";
import AboutScreen from "./pages/about/views/AboutScreen";

const App = () => {
  return (
    <Routes>
      <Route index element={<HomeScreen />} />
      <Route path={RoutesPath.about} element={<AboutScreen />} />
    </Routes>
  );
};

export default App;
