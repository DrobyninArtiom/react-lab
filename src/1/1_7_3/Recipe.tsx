// 1_7_3 Extracting a list item component - Created Recipe component to simplify RecipeList
interface RecipeProps {
  id: string;
  name: string;
  ingredients: string[];
}

export default function Recipe({ id, name, ingredients }: RecipeProps) {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>
            {ingredient}
          </li>
        ))}
      </ul>
    </div>
  );
}
