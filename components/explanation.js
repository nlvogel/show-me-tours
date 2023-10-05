export function TextField(props) {
    return (
        <section className={`text-field max-width`}>
            <h2>{props.textFieldTitle}</h2>
            <div>{props.children}</div>
        </section>
    )
}