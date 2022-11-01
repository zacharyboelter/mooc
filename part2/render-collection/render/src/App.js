import Note from './Note'
import { useState } from 'react'


const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note =>
           <Note key={note.id} note={note}/>
        )}
      </ul>
    </div>
  )
}

export default App
