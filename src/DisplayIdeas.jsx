export default function DisplayIdeas(props) {

    console.log(typeof props.foo)

    let crazyIdeas = props.foo.map((idea, index) => <li key={index}>{idea}</li>)

    return (
        <div>
            <ul>
                {crazyIdeas}
            </ul>
        </div>
    )
}