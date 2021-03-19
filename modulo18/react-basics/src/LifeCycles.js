import React from "react"

const LifeCycles = (props) => {
    const [name, setName] = React.useState('Francisco')

    React.useEffect( () => {
        console.log('Count')
        setName('Sofía')
    })
    return <p>Hola LifeCycles</p>
}

export default LifeCycles