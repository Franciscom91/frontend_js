import React from "react"
import MyText from "./MyText"

const StateApp = () => {
    const [title, setTitle] = React.useState('') // [state, método]

    const changeTitle = (event) => {
        console.log(event.target.value)
        setTitle(event.target.value)
    }

    return (
      <div className="App">
        <header className="App-header">
          <MyText theTitle="{title}" />
          <input onChange={changeTitle}/>
        </header>
      </div>
    );
  }

  export default StateApp