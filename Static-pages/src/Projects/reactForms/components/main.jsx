export default function Main() {
    function handleSubmit(event) {
        event.preventDefault()
        const formElement = event.currentTarget
        const formData = new FormData(formElement)
        formElement.reset()
    }
    return (
        <section>
            <h1>Signup form</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input id="email" type="email" name="email" placeholder="joe@schmoe.com" />
                <br /><br />
                <label htmlFor="password">Password:</label>
                <input id="password" name="password" type="password" placeholder="*****"></input>
                <br /><br />
                <input type="submit" value="SUBMIT"></input>

            </form>
        </section>
    )
}



/**
 * Challenge: add another label and input for the password field
 */

