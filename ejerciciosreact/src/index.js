import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
    </div>
    )
}

const Content = (props) => {
  return (
    <div>
      <p>{props.part} {props.exercise}</p>
    </div>
    )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.sum}</p>
    </div>
    )
}

const App = () => {
  return (
    <div>
      <Header name="Half Stack application development"/>
      <Content part="Fundamentals of React" exercise={10}/>
      <Content part="Using props to pass data" exercise={7}/>
      <Content part="State of a component" exercise={14}/>
      <Total sum={10 + 7 + 14}/>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))