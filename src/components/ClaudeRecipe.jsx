import ReactMarkdown from "react-markdown";

export default function ClaudeRecipe(props) {
    return (
        <section>
            {props.recipe}
            <ReactMarkdown children={props.recipe} />
        </section>
    )
}
