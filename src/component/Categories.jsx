// Categories.js
import React, { useState,useEffect} from 'react';
import data from '../data';
import Subcategories from './Subcategories';

const Categories = () => {
  const [selectedCategory, setSelectedCategory] = useState();
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };
 
  const categories = data.categories

  return (
    <>
      <h2>Categories</h2>

      <ul>
        {categories.map((category) => (
          <li>
            <a onClick={() => handleCategoryClick(category.name)}>
              {category.name}
            </a>
          </li>
        ))}
      </ul>
      {selectedCategory && (
        <Subcategories category={selectedCategory} />
      )}
    </>
  );
};

export default Categories;