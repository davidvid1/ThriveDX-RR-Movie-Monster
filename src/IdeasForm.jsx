import { useState } from 'react'

export default function IdeasForm(props) {
    let [input, setInput] = useState('')

    return (
        <div>
            <input type="text" onChange={e => setInput(e.target.value)}/>
            <button onClick={() => props.setIdeas(input)}>Submit</button>
        </div>
    )
}