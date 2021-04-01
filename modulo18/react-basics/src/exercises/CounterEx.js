import React, { useState } from "react"

const CounterEx = () => {
    const [count, setCount] = useState(0)
    const [message, setMessage] = useState('')

    const addCount = () => {
        setMessage('')
        if(count >= 30){
            setMessage('No se puede seguir sumando')
        } else{
            setCount(count + 1)
        }
    }

    const substractCount = () => {
        setMessage('')
        if (count <= 0) {
            setMessage('No se puede seguir restando')
        } else {
            setCount(count - 1)
        }
        
    }

    return <div className="App">
        <h2>Counter Exercise</h2>
        <br></br>
        <h3> { count } </h3>
        <br></br>
        <button onClick={addCount}>Sumar</button>
        <button onClick={substractCount}>Restar</button>
        <p> { message } </p>
    </div>
}

export default CounterEx