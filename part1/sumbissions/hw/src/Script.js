import { useState } from "react"


const Script = () => {
    // const [left, setLeft ] = useState(0)
    // const [right, setRight ] = useState(0)

    const [clicks, setClicks] = useState({
        left: 0,
        right: 0
    })

    const handleLeftClicks = () => {
        const newClicks = {
            left: clicks.left + 1,
            right: clicks.right
        }
        setClicks(newClicks)
    }
    const handleRightClicks = () => {
        const newClicks = {
            left: clicks.left,
            right: clicks.right + 1
        }
        setClicks(newClicks)
    }



    return (
        <>
        {clicks.left}
            <button onClick={handleLeftClicks}>
                left
            </button>
            <button onClick={handleRightClicks}>
                right
            </button>
        {clicks.right}
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


// //  Display component
// const Display = ({counter}) => <div>{counter}</div>


// // Button component
// const Button = ({onClick, text}) =>  <button onClick={onClick}>{text}</button> 
  

// const Script = () => {
//   const [ counter, setCounter ] = useState(0)


//   const increaseByOne = () => setCounter(counter + 1)
//   const decreaseByOne = () => setCounter(counter - 1)
//   const setToZero = () => setCounter(0)


//   console.log('rendering...', counter)
   
//   return(
//     <>
//       <Display counter={counter}/> <br />
//       <Button onClick={increaseByOne} text='Plus 1' /> <br />
//       <Button onClick={decreaseByOne} text='Minus 1' /> <br />
//       <Button onClick={setToZero} text='Reset' />
//     </>
//   )  
// }
