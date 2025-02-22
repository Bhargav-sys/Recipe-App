import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function CRecipes() {
  const [recipes, setRecipes] = useState([]);
  const location = useLocation();
  
  
  const params = new URLSearchParams(location.search);
  const cuisine = params.get("cuisine");

  useEffect(() => {
    if (cuisine) {
      fetch(`http://localhost:5000/recipe/?cuisine=${cuisine}`)
        .then((res) => res.json())
        .then((data) => setRecipes(data))
        .catch((err) => console.error("Error fetching recipes:", err));
    }
  }, [cuisine]);

  return (
    <div>
      <Navbar />
      <div style={{textAlign: 'center'}}>
        <h2 className='cuisine-name'>{cuisine} Recipes</h2>
        {recipes.length === 0 ? (
          <p>No recipes found for {cuisine}.</p>
        ) : (
            
                <div className="recipe-list" style={{ display: 'flex', gap: '20px', marginTop: '-120px',width:'1519px' }}>
                    {recipes.map((recipe) => (
                    <div key={recipe._id} className="recipe-card" style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '10px', backgroundColor: '#fff' }}>
                        <h3>{recipe.title}</h3>
                        <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
                        <p><strong>Time:</strong> {recipe.time} minutes</p>
                        <p><strong>Instructions:</strong> {recipe.instructions}</p>
                    </div>
                    ))}
                </div>
            
        )}
      </div>
    </div>
  );
}
