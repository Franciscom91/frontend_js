import React from "react"

const MyText = (props) => {
    console.log(props)
    return <p>{ props.theTitle }</p>
}

export default MyText