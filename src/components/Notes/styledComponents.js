import styled from 'styled-components'

export const MainContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`
export const Heading = styled.h1`
  color: #4c63b6;
  font-size: 30px;
  font-family: 'Bree Serif';
`

export const InputBox = styled.form`
  width: 60%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  margin-bottom: 25px;
  box-shadow: 5px 5px 5px 5px #475569;
`

export const TitleInput = styled.input`
  border: none;
  color: #1e293b;
  font-size: 15px;
  font-family: 'Roboto';
  margin-bottom: 15px;
`
export const NoteInput = styled.textarea`
  border: none;
  color: #1e293b;
  font-size: 15px;
  font-family: 'Roboto';
  margin-bottom: 15px;
`

export const AddButton = styled.button`
  color: #ffffff;
  background-color: #4c63b6;
  font-size: 15px;
  padding: 10px;
  border: none;
  outline: none;
  cursor: pointer;
  border-radius: 6px;
  align-self: flex-end;
`
export const EmptyImg = styled.img`
  width: 100px;
  height: 100px;
`

export const EmptyHead = styled.h1`
  color: #334155;
  font-family: 'Roboto';
  font-size: 18px;
`

export const EmptyText = styled.p`
  color: #334155;
  font-family: 'Roboto';
  font-size: 13px;
`
export const AllNotes = styled.ul`
  width: 60%;
  display: flex;
  flex-wrap: wrap;
`
