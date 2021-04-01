import React from "react"

const LifeCycles = (props) => {
    const [name, setName] = React.useState('Francisco')
    const [todos, setTodos] = React.useState([])

    React.useEffect( () => {
        console.log('Count')
        setName('Sofía')
        fetch('https://jsonplaceholder.typicode.com/todos/1').then(rsp => rsp.json()).then(json => setTodos(json))
    }, [name])
    return <p>Hola {name}</p>
}

export default LifeCycles