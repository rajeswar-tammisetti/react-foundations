export default function Main() {
    const ingredients = ["Chicken", "Oregano", "Tomatoes"]
    const ingredientsList =ingredients.map(ingredient =>
        (
            <li>{ingredient}</li>
        ))
    return (
        <main>
            <form className="add-ingredient-form">
                <input type="text" placeholder="e.g. oregan" aria-label="Add ingredient" />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientsList}
            </ul>
        </main>
    )
}