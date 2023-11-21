import React from 'react'
import ReactDOM from 'react-dom'

// const Header = (props) => {
//   return (
//     <div>
//       <h1>{props.course}</h1>
//     </div>
//   )
// }

// const Part = (props) => {
//   return (
//     <div>
//       <p>{props.part} {props.exercise}</p>
//     </div>
//   )
// }

// const Content = () => {
//   return (
//     <div>
//       <Part part="Fundamentals of React" exercise={10} />
//       <Part part="Using props to pass data" exercise={7} />
//       <Part part="State of a component" exercise={14} />
//     </div>
//   )
// }

// const Total = (props) => {
//   return (
//     <div>
//       <p>Number of exercises {props.exercises}</p>
//     </div>
//   )
// }

// const App = () => {
//   return (
//     <div>
//       <Header name="Half Stack application development" />
//       <Content />
//       <Total sum={10 + 7 + 14} />
//     </div>
//   )
// }

const Hello = ({name, age}) => {
  const bornYear = () => new Date().getFullYear() - age

  return (
    <div>
      <p>
        Hello {name}, you are {age} years old
      </p>

      <p>So you were probably born in {bornYear()}</p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))