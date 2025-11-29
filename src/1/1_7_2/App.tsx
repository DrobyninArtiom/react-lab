// 1_7_2 Nested lists in one component - Created nested lists for recipes and their ingredients using map functions

import { recipes } from './data';

export default function RecipeList() {
    return (
        <div>
            <h1>Recipes</h1>
            {recipes.map((recipe) => (
                <div key={recipe.id}>
                    <h2>{recipe.name}</h2>
                    <ul>
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
