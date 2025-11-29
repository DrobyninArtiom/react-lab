// 1_7_3 Extracting a list item component - Updated RecipeList to use Recipe component

import { recipes } from './data';
import Recipe from './Recipe';

export default function RecipeList() {
    return (
        <div>
            <h1>Recipes</h1>
            {recipes.map((recipe) => (
                <Recipe
                    key={recipe.id}
                    id={recipe.id}
                    name={recipe.name}
                    ingredients={recipe.ingredients}
                />
            ))}
        </div>
    );
}