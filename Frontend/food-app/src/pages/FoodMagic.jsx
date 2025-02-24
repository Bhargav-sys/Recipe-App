// import React from 'react'
// import Navbar from '../components/Navbar'

// function FoodMagic() {
//   return (
//     <>
       
//         <div style={{backgroundColor: "black", height: "100vh"}}>
//              <Navbar></Navbar>
//         <p className='content'> 
//           Find out what delicacy does your kitchen hold
//         </p>
//         <div className="mFormCont">

//         </div>

//         </div>
  
//     </>
//   )
// }

// export default FoodMagic
import React, { useState } from "react";
import Navbar from "../components/Navbar";

function FoodMagic() {
  const [ingredients, setIngredients] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const API_KEY = "API_KEY"; 
  const API_URL = `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredients}&number=5&apiKey=${API_KEY}`;

  const fetchRecipes = async () => {
    if (!ingredients.trim()) return;
    setLoading(true);

    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setRecipes(data);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }

    setLoading(false);
  };

  return (
    <>
      <div className='outerForm' style={{height: "100vh", color: "white" }}>
        <Navbar />
        <p className="content">
          Find out what delicacy your kitchen holds
        </p>

        {/* Input Form */}
        <div className="mFormCont">
          <input
            type="text"
            placeholder="Enter ingredients (comma-separated)"
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
            className="inputBox"
          />
          <button onClick={fetchRecipes} className="generateBtn">
            Generate
          </button>
        </div>
        {loading && <p>Loading recipes...</p>}

        <div className="recipeList">
          {recipes.map((recipe) => (
            <div key={recipe.id} className="recipeCard">
              <img src={recipe.image} alt={recipe.title} />
              <p>{recipe.title}</p>
            </div>
          ))}
        </div>

      </div>
    </>
  );
}

export default FoodMagic;
