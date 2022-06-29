import React from "react";
import { categoriesData } from "../data";
import CategoryItem from "./CategoryItem";

const Categories = () => {
  return (
    <div className="container">
      <h1 className="text-center">Categories</h1>
      <div className="w-100 d-flex">
        {categoriesData.map((item) => (
          <CategoryItem item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
