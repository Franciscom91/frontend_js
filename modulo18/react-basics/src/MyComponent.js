import React from "react"

const MyText = () => {
    return <b>Functional Component</b>
}

// Functional Component
const MyComponent = () => {
    return <p>Hola desde mi <MyText /></p>
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