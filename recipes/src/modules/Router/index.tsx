// import React, { Component } from "react";
import Home from "../Home";
import RecipesList from "../RecipesList";
import AddRecipe from "../AddRecipe";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ROUTES } from "../../shared/constants";
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.base} element={<Home />} />
        <Route path={ROUTES.recipes} element={<RecipesList />} />
        <Route path={ROUTES.addRecipe} element={<AddRecipe />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
