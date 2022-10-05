


const Time = () => {
  const now = new Date()
  // const a = 10
  // const b = 20

  return (
    <div>
      <p>The time is {now.toString()}</p>
      {/* <p>
        {a} plus {b} is {a + b}
      </p> */}
    </div>
  )
}

const Hello = (props) => {
  return (
    <div>
      <p>Hello, {props.name}</p>
    </div>
  )
}

const App = () => {
  return (
    <div>
      <h1>Greetings</h1>
      <Hello name='Barbara S.' />
      <Hello name='Timotee C.'/>
      <Hello name='Zachary B.'/>
      <Time />
    </div>
  )
}

export default App