import Note from './Note'
import { useState } from 'react'


const App = (props) => {
  const [notes, setNotes] = useState(props.notes)
  const [newNote, setNewNote] = useState('... blah')
  const [showAll, setShowAll] = useState(true)

  const addNote = (e) => {
    e.preventDefault()
    console.log('Button Clicked', e.target)
    const noteObject ={
      id: notes.length + 1,
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5
    }
    setNotes(notes.concat(noteObject))
    setNewNote('')
  }
  const handleNoteChange = (e) => {
    console.log(e.target.value)
    setNewNote(e.target.value)
  }
  const notesToShow = showAll 
    ? notes
    : notes.filter(note => note.important)

  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all' }
        </button>
      </div>
      <ul>
        {notesToShow.map(note =>
           <Note key={note.id} note={note}/>
        )}
      </ul>
      <form onSubmit={addNote} action="">
          <input 
            type="text"
            value={newNote}
            onChange={handleNoteChange}
          />
          <button type='submit' >
            Add Note
          </button>
      </form>
    </div>
  )
}

export default App
