const App = (props) => {
  const { notes } = props

  return (
    <div>
      <h1>Notes</h1>
      <ol>
      {/* notes[1].content */}
      {/* notes[2].content */}
      {/* notes[3].content */}
      {/* Instead, map over the array and display each as an LI */}
        {notes.map(note =>
           <li>
              {note.content}
            </li>)}
      </ol>
    </div>
  )
}

export default App