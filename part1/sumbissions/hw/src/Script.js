import { useState } from "react"


const History = (props) => {
    if (props.allClicks.length === 0) {
        return (
            <>
                The app is used by pressing the buttons.
            </>
            )
    } else {
        return (
            <>
                History of clicks: {props.allClicks.join(', ')}
            </>
        )
    }   
}

const Button = ({handleClick, text}) => {
    return (
        <button onClick={handleClick}>
            {text}
        </button>
    )
}

const Script = () => {
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])

    const handleLeftClicks = () => {
        setAll(allClicks.concat('L'))
        setLeft(left + 1)
    }
    const handleRightClicks = () => {
        setAll(allClicks.concat('R'))
        setRight(right + 1)
    }

    const reset = () => {
        setLeft(0)
        setRight(0)
        setAll([])
    }

    return (
        <>
            {left}
                <Button handleClick={handleLeftClicks} text='Left'/>
                <Button handleClick={handleRightClicks} text='Right'/>
            {right}
            <br />
            <Button handleClick={() => setLeft(0)} text='Set left to zero'/>
            <Button handleClick={() => setRight(0)} text='Set right to zero'/>
            <br />
                <History allClicks={allClicks}/>
            <br />
            <br />
                <Button handleClick={reset} text='Reset'/>
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



// const Script = () => {
//     // const [left, setLeft ] = useState(0)
//     // const [right, setRight ] = useState(0)

//     // Changing state has to always be done by setting the state to a new object!

//     const [clicks, setClicks] = useState({
//         left: 0,
//         right: 0
//     })

//     const handleLeftClicks = () => {
//         setClicks({...clicks, left: clicks.left + 1 })
        
//     }
//     const handleRightClicks = () => {
//         setClicks({...clicks, right: clicks.right + 1})
//     }



//     return (
//         <>
//         {clicks.left}
//             <button onClick={handleLeftClicks}>left</button>
//             <button onClick={handleRightClicks}>right</button>
//         {clicks.right}
//         </>
//     )
// }