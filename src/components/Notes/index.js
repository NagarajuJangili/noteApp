import {useState} from 'react'

import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'

import {
  MainContainer,
  Heading,
  InputBox,
  TitleInput,
  NoteInput,
  AddButton,
  EmptyImg,
  EmptyHead,
  EmptyText,
  AllNotes,
} from './styledComponents'

const Notes = () => {
  const [title, setTitle] = useState('')
  const [noteItem, setNoteItem] = useState('')
  const [notesList, setNotesList] = useState([])

  const onChangeTitle = event => {
    setTitle(event.target.value)
  }

  const onChangeNotes = event => {
    setNoteItem(event.target.value)
  }

  const onClickAdd = event => {
    event.preventDefault()
    const newNote = {
      id: uuidv4(),
      title,
      noteItem,
    }
    setNotesList(prevState => [...prevState, newNote])
    setTitle('')
    setNoteItem('')
  }

  const emptyView = () => (
    <>
      <EmptyImg
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <EmptyHead>No Notes Yet</EmptyHead>
      <EmptyText>Notes you add will appear here</EmptyText>
    </>
  )

  const allNotesRender = () => (
    <>
      <AllNotes>
        {notesList.map(each => (
          <NoteItem eachNote={each} key={each.id} />
        ))}
      </AllNotes>
    </>
  )

  return (
    <MainContainer>
      <Heading>Notes</Heading>
      <InputBox onSubmit={onClickAdd}>
        <TitleInput
          type="text"
          onChange={onChangeTitle}
          placeholder="Title"
          value={title}
        />
        <NoteInput
          placeholder="Take a Note..."
          row="6"
          onChange={onChangeNotes}
          value={noteItem}
        />
        <AddButton type="submit">Add</AddButton>
      </InputBox>
      {notesList.length === 0 ? emptyView() : allNotesRender()}
    </MainContainer>
  )
}

export default Notes
