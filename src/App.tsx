import React from "react";
import HomeScreen from "./pages/home/views/HomeScreen";
import { Route, Routes } from "react-router-dom";
import RoutesPath from "./constants/Routes";
import AboutScreen from "./pages/about/views/AboutScreen";
import NewsScreen from "./pages/news/views/NewsScreen";

const App = () => {
  return (
    <Routes>
      <Route index element={<HomeScreen />} />
      <Route path={RoutesPath.about} element={<AboutScreen />} />
      <Route path={RoutesPath.news} element={<NewsScreen />} />
    </Routes>
  );
};

export default App;
