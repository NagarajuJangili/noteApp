import {EachNote, Head, Description} from './styledComponents'

const NoteItem = props => {
  const {eachNote} = props
  const {title, noteItem} = eachNote
  return (
    <EachNote>
      <Head>{title}</Head>
      <Description>{noteItem}</Description>
    </EachNote>
  )
}
export default NoteItem
