import { useState } from "react"


//  Display component
const Display = ({counter}) => <div>{counter}</div>


// Button component
const Button = ({onClick, text}) =>  <button onClick={onClick}>{text}</button> 
  

const Script = () => {
  const [ counter, setCounter ] = useState(0)


  const increaseByOne = () => setCounter(counter + 1)
  const decreaseByOne = () => setCounter(counter - 1)
  const setToZero = () => setCounter(0)


  console.log('rendering...', counter)
   
  return(
    <>
      <Display counter={counter}/> <br />
      <Button onClick={increaseByOne} text='Plus 1' /> <br />
      <Button onClick={decreaseByOne} text='Minus 1' /> <br />
      <Button onClick={setToZero} text='Reset' />
    </>
  )  
}



export default Script


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
