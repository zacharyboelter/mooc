import Note from './Note'
import { useState } from 'react'


const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('... blah')

  const addNote = (e) => {
    e.preventDefault()
    console.log('Button Clicked', e.target);
  }

  const handleNoteChange = (e) => {
    console.log(e.target.value)
    setNewNote(e.target.value)
  }
  

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map(note =>
           <Note key={note.id} note={note}/>
        )}
      </ul>
      <form onSubmit={addNote} action="">
          <input 
            type="text"
            value={newNote}
            onChange={handleNoteChange}
          />
          <button type='submit'>Add Note</button>
      </form>
    </div>
  )
}

export default App
