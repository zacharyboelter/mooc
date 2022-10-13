import { useState } from 'react'
import './styles.css'


const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const Statline = (props) => {
  return (
    <>
      <p>{props.text}: {props.value}</p>
    </>
  )
}

const Statistics = ({good, neutral, bad, all}) => {
  if (all === 0){
    return (
      <>
        No feedback given.
      </>
    )
  } else {
    return(
      <>
        <Statline text='good' value={good}/>
        <Statline text='neutraaaaaal' value={neutral}/>
        <Statline text='not good' value={bad}/>
        <Statline text='all of them counted up' value={all}/>
        <Statline text='what the average be?' value={((good - bad) / all).toFixed(2)}/>
        <Statline text='positive response average' value={`${(good / all * 100).toFixed(2)}%`} />
      </>
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
  const all = good + neutral + bad 


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
        all={all}
      />
    </div>
  )
}

export default App