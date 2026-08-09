export default function Main() {
    // function handleSubmit(event) {
    //     event.preventDefault()
    //     const formElement = event.currentTarget
    //     const formData = new FormData(formElement)
    //     formElement.reset()
    // }

    // function handleSubmit(formData) {
    //     let emp = formData.get("employmentStatus")
    //     let mail = formData.get("email")
    //     let pass = formData.get("password")
    //     let hello = formData.getAll("hello")
    //     console.log(mail)
    //     console.log(pass)
    //     console.log(emp)
    //     console.log(hello)
    // }

    function handleSubmit(formData) {
        const data = Object.fromEntries(formData)
        const hello = formData.getAll("hello")
        console.log(hello)
        const allData = {
            ...data,
            hello
        }
        console.log(allData)
    }

    
    return (
        <section>
            <h1>Signup form</h1>
            <form action={handleSubmit}>
                <label htmlFor="email">Email:</label>
                <input id="email" type="email" name="email" placeholder="joe@schmoe.com" defaultValue="joe@schmoe.com" />
                <br /><br />
                <label htmlFor="password">Password:</label>
                <input id="password" name="password" type="password" placeholder="*****" defaultValue="hi123"></input>
                <br /><br />
                <fieldset>
                    <legend>Employment</legend>
                    <label>
                        <input type="radio" name="employmentStatus" value="unemployed" defaultChecked={true} />
                        Unemployed
                    </label>
                    <label>
                        <input type="radio" name="employmentStatus" value="part-time" />
                        Part-Time
                    </label>
                    <label>
                        <input type="radio" name="employmentStatus" value="full-time" />
                        Full-Time
                    </label>
                </fieldset>
                <fieldset>
                    <legend>HELLO</legend>
                    <label><input type="checkbox" name="hello" value="hi" defaultChecked={true} />hi</label>
                    <label><input type="checkbox" name="hello" value="hello" />hello</label>
                    <label><input type="checkbox" name="hello" value="bye" />bye</label>
                </fieldset>
                <label htmlFor="favColor">What is your favourite color?</label>
                <select name="favColor" id="favColor" defaultValue="" required>
                    <option value="" disabled >--- Choose a color ---</option>
                    <option value="red">red</option>
                    <option value="yellow">yellow</option>
                    <option value="green">green</option>
                    <option value="blue">blue</option>
                    <option value="black">black</option>
                </select>
                <input type="submit" value="SUBMIT"></input>
            </form>
        </section>
    )
}



/**
 * Challenge: add another label and input for the password field
 */

