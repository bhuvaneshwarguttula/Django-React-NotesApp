import React, {useEffect ,useState} from 'react'
// import notes from '../assets/data'
import ListItem from '../components/ListItem'
import AddButton from '../components/AddButton'

const NotesListPage = () => {

  let [notes, setNotes] = useState([])
  
  useEffect(() => {
    getNotes()
  }, []) //empty array is dependencies

  let getNotes = async () => {
      // if (id === 'new') return 
      // let response = await fetch('http://localhost:5000/notes/')
      let response = await fetch('/api/notes/')
      let data = await response.json()
      console.log("data", data)
      setNotes(data)
  }

  return (
    <div className='notes'>
        <div className='notes-header'>
            <h2 className='notes-title'>&#9782; Notes</h2>
            <p className='notes-count'>{notes.length}</p>
        </div>
        <div className='notes-list'>
            {notes.map((note, index) => (
                <ListItem key={index} note={note} />
            ))}
        </div>
        <AddButton />
    </div>
  )
}

export default NotesListPage;