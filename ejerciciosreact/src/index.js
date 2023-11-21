import React from 'react'
import ReactDOM from 'react-dom'

// const Header = (props) => {
//   return (
//     <div>
//       <h1>{props.name}</h1>
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
//       <p>Number of exercises {props.sum}</p>
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

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <h1>{course}</h1>
      <h3>{parts[0].name}</h3>
      <h3>{parts[1].name}</h3>
      <h3>{parts[2].name}</h3>
      <h4>Total: {parts[0].exercises + parts[1].exercises + parts[2].exercises}</h4>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))