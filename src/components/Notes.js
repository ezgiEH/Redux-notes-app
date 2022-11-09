import React from 'react'
import { useSelector } from 'react-redux'


function Notes() {
    const notes = useSelector(state => state.notes.items)
  
    return (
    <div>
        {notes.map(note => (
            <div key={note.id} className="note">
                <h1>{note.title}</h1>
                <p>{note.content}</p>
            </div>
        ))}
    </div>
  )
}

export default Notes