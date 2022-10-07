import { useState } from "react"


const App = () => {
  const [ counter, setCounter ] = useState(0)


  const increaseByOne = () => setCounter(counter + 1)

  const setToZero = () => setCounter(0)
  // setTimeout(
  //   () => setCounter(counter + 1),
  //   1000
  //   )

    console.log('rendering...', counter)
   
  return(
    <>
      <button onClick={increaseByOne}>
        Plus
      </button>
      
      <br />
      
      {counter} fuck you

      <br />

      <button onClick={(setToZero}>
        Reset
      </button>
      
    </>
  )  
}

export default App





// const App = () => {
//   const course = {
//     name: 'Half Stack application development',
//     parts: [
//       {
//         name: 'Fundamentals of React',
//         exercises: 10
//       },
//       {
//         name: 'Using props to pass data',
//         exercises: 7
//       },
//       {
//         name: 'State of a component',
//         exercises: 14
//       }
//     ]
//   }

//   return (
//     <div>
//       <h1>{course.name}</h1>
//       <p>
//         {course.parts[0].name} {course.parts[0].exercises} 
//       </p>
//       <p>
//         {course.parts[1].name} {course.parts[1].exercises}
//       </p>
//       <p>
//         {course.parts[2].name} {course.parts[2].exercises}
//       </p>
//       <p>Number of exercises {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}</p>
//     </div>
//   )
// }



// ~~~~~~~~~~~~~~~~~~~~~~  Further deconstuct the shit below!!! ~~~~~~~~~~~~~~~~~~~~~~~
// const Hello = ({name, age}) => {
//   const bornYear = () => new Date().getFullYear() - age
// }

// const Hello = (props) => {
//   const { name, age } = props
//   const bornYear = () => new Date().getFullYear() - age
  
//   return (
//     <div>
//       <p>
//         Hello {props.name}, you are {props.age} years old
//       </p>
//       <p>
//         Let me guess, you were born in {bornYear()} then?
//       </p>
//     </div>
//   )
// }

// const App = () => {
//   const name = 'Peter'
//   const age = 10

//   return (
//     <div>
//       <h1>Greetings</h1>
//       <Hello name="Maya" age={26 + 10} />
//       <Hello name={name} age={age} />
//     </div>
//   )
// }
