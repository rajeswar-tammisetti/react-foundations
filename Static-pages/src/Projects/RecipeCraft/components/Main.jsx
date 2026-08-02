import React from "react"
export default function Main() {
    const [ingredients, setIngredients] = React.useState([])
    const ingredientsListItems = ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)

    /**
     * Challenge: Update our app so that when the user enters a
     * new ingredient and submits the form, it adds that new
     * ingredient to our list!
     */

    function addIngredient(formData) {
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
    }

    return (
        <main>
            <form action={addIngredient} className="add-ingredient-form">
                <input type="text" placeholder="e.g. oregan" aria-label="Add ingredient" name="ingredient" />
                <button>Add ingredient</button>
            </form>
            <ul>
                {ingredientsListItems}
            </ul>
        </main>
    )
}