export default function IngredientsList(props){
    const ingredientsListItems = props.ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)

    return(
        <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
    )
}