
// const Header = (props) => {
//   console.log(props)
//   return (
//     <>
//       <h1>{props.course}</h1>
//     </>
//   )
// }

// const Part1 = (props) =>{
//   console.log(props)
//   return (
//     <>
//       <p>
//         {props.part1} {props.exercises1}
//       </p>
//     </>
//   )
// }
// const Part2 = (props) =>{
//   console.log(props)
//   return (
//     <>
//       <p>
//         {props.part2} {props.exercises2}
//       </p>
//     </>
//   )
// }
// const Part3 = (props) =>{
//   console.log(props)
//   return (
//     <>
//       <p>
//         {props.part3} {props.exercises3}
//       </p>
//     </>
//   )
// }


// const Content = (props) => {
//   const part1 = 'Fundamentals of React'
//   const part2 = 'Using props to pass data'
//   const part3 = 'State of a component'
//   const exercises1 = 10
//   const exercises2 = 7
//   const exercises3 = 14
//   return (
//     <>
//       <Part1 part1={part1} exercises1={exercises1}/>
//       <Part2 part2={part2} exercises2={exercises2}/>
//       <Part3 part3={part3} exercises3={exercises3}/>
//     </>
//   )
// }

// const Total = (props) => {
  
//   return (
//     <>
//       <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
//     </>
//   )
// }

// const App = () => {
//   const course = 'Half Stack application development'
//   const exercises1 = 10
//   const exercises2 = 7
//   const exercises3 = 14

//   return (
//     <div>
//       <Header course={course} />
//       <Content />
//       <Total exercises1={exercises1}
//              exercises2={exercises2}
//              exercises3={exercises3}/>
//     </div>
//   )
// }


const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <h1>{course.name}</h1>
      <p>
        {course.parts[0].name} {course.parts[0].exercises} 
      </p>
      <p>
        {course.parts[1].name} {course.parts[1].exercises}
      </p>
      <p>
        {course.parts[2].name} {course.parts[2].exercises}
      </p>
      <p>Number of exercises {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</p>
    </div>
  )
}

export default App