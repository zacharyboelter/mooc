


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
      <p>
        Hello, {props.name}. You are {props.age} years old. That is quite old.
        </p>
        <p>
        Nec vero habere virtutem satis est quasi artem aliquam nisi utare; etsi ars quidem cum ea non utare scientia tamen ipsa teneri potest, virtus in usu sui tota posita est; usus autem eius est maximus civitatis gubernatio, et earum ipsarum rerum quas isti in angulis personant, reapse non oratione perfectio. nihil enim dicitur a philosophis, quod quidem recte honesteque dicatur, quod ab iis partum confirmatumque sit, a quibus civitatibus iura discripta sunt. unde enim pietas, aut a quibus religio? unde ius aut gentium aut hoc ipsum civile quod dicitur? unde iustitia fides aequitas? unde pudor continentia fuga turpi dinis adpetentia laudis et honestatis? unde in laboribus et periculis fortitudo? 
        </p>
    </div>
  )
}

const App = () => {
  const name = 'Zachary'
  const age = 33

  return (
    <>
      <h1>Greetings</h1>
      <Hello name='Barbara' age={44+13} />
      <Hello name={name} age={age}/>
     <br />
      <Time />
    </>
  )
}

export default App