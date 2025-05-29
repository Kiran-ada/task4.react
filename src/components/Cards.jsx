import React from "react";

import Fakedata from "./Fakedata.jsx";


import "./Cards.css";



function Cards() {
    
        return (
        <div>
            <h2>Recipe list</h2>
            <div className="recipe-list"  >
                {Fakedata.recipes.map((recipe, index) => (
                    <div className="recipe-card" key={recipe.id}>
                        <img src={recipe.image} alt={recipe.name} />
                        <h3>{recipe.name}</h3>
                        
                    </div>
                ))}
            </div>
        </div>
    );

}
export default Cards;