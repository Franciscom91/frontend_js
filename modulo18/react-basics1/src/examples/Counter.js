import React, { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0)

    const addCount = () => {
        setCount(count + 1)
    }

    const substractCount = () => {
        setCount(count - 1)
    }

    return <div className="App">
        <h1>Counter</h1>
        <p><b>{ count }</b></p>
        <br/><br/>
        <button onClick={addCount}>Sumar</button>
        <button onClick={substractCount}>Restar</button>
    </div>
}

export default Counter