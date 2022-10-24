import { useState } from 'react'
import './styles.css'


// coming back and commenting to see what I remember off the top



//button component, destructured props
const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

// statline component that gets passed to statistics component, props set in stats
const Statline = (props) => {
  return (
    <>
      <p>{props.text} {props.value}</p>
    </>
  )
}

//stats component, destructured props (set in App), conditional rendering if there are no votes. html table with maths logic set inside
const Statistics = ({good, neutral, bad, total}) => {
  if (total === 0){
    return (
      <>
        No feedback given.
      </>
    )
  } else {
    return(
      <table>
        <tbody>
          <tr>
            <td><Statline text='Good:'/></td>
            <td><Statline value={good}/></td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td><Statline text='Neutral:'/></td>
            <td><Statline value={neutral}/></td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td><Statline text='Bad:'/></td>
            <td><Statline value={bad}/></td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td><Statline text='Total:'/></td>
            <td><Statline value={total}/></td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td><Statline text='Average:'/></td>
            <td><Statline value={((good - bad) / total).toFixed(2)}/></td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td><Statline text='Positive Rate:'/></td>
            <td><Statline value={`${(good / total * 100).toFixed(2)}%`}/></td>
          </tr>
        </tbody>
      </table>
    )
  }
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  

  const handleGoodClick = () => {
    setGood(good + 1)
  }
  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }
  const handleBadClick = () => {
    setBad(bad + 1)
  }
  const total = good + neutral + bad 


  return (
    <div>
      <h2>give feedback</h2>
      <br />
      <Button className=''good-btn text='Good' handleClick={handleGoodClick}/>
      <Button text='Neutral' handleClick={handleNeutralClick}/>
      <Button text='Bad' handleClick={handleBadClick}/>
      <br />
      <h2>statistics</h2>
      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
      />
    </div>
  )
}

export default App