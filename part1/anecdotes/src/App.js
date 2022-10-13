import { useState } from 'react'

const Button = ({handleClick, text}) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const DisplayVotes = (props) => {
  console.log(props)
  return (
    <>
      <p>Number of votes: {props.value}</p>
    </>
  )
}



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  //create new array, all elements set to 0, length of array of anecdotes
  const votes_table = new Uint8Array(anecdotes.length)
  const [votes, setVotes] = useState(votes_table)

  const [mostVotes, setMostVotes] = useState(0)

  const getRandomIndex  = () => {
    const random = Math.floor(Math.random() * anecdotes.length)
    setSelected(random)
  }

  const handleVote = () => {
    setVotes(newTable(selected, votes))
  }

  const checkHighest = (arr) => {
    let max = 0;
    let maxi = 0;
    for(let i = 0; i < anecdotes.length; i++){
      if(arr[i] > max){
        max = arr[i]
        maxi = i
      }
    }
    setMostVotes(maxi)
  }
  
  const newTable = (selected, votes) => {
    const copy = [...votes]
    copy[selected] += 1
    console.log(copy)
    checkHighest(copy)
    return copy

  }

  return (
    <div>
      <h1>Anecdote of the Day</h1>
      {anecdotes[selected]}
      <br />
      <br />
      <DisplayVotes value={votes[selected]} />
      <br />
      <Button handleClick={handleVote} text='Upvote' />
      <Button handleClick={getRandomIndex} text='Next Anecdote'/>
      <br />
      <h1>Highest Voted Anecdote: </h1>
      <p>{anecdotes[mostVotes]}</p>
    </div>
  )
}

export default App