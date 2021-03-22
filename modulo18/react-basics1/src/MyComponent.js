import React from "react"

// Functional Component
const MyComponent = () => {
    return <p>Hola desde mi Functional Component</p>
}

// Class Component
class MyClassComponent extends React.component {
    render() {
        return <p>Hola desde mi Class Component</p>
    }
}

export {
    MyComponent,
    MyClassComponent
}