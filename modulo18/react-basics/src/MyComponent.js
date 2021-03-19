import React from "react"

// Functional Component
const MyComponent = () => {
    return <P>Hola desde mi Functional Component</P>
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