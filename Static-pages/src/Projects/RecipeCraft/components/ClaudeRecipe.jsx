import ReactMarkdown from 'react-markdown'
export default function ClaudeRecipe(props){
    return (
        <section>
                <h2>Recommended Recipe:</h2>
                <article className="suggested-recipe-container" aria-live="polite">
                    <ReactMarkdown>{props.recipe}</ReactMarkdown>
                </article>
            </section>
    )
}