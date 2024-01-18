import { useState, KeyboardEvent} from 'react'
import * as C from  './styles'


type Props = {
    onEnter: (taskName: string)  => void
}

const AddArea = ({onEnter}: Props) => {
const [text, setText] = useState('')

const addTask = () => {
  onEnter(text)
  setText('')
}

const handleKeyDown = (e: KeyboardEvent) =>  {
    if(e.code === 'Enter' && text !==  ''){
        addTask()
    }

}
  return (
    <C.Container>
        <div className='image' onClick={addTask}>➕</div>
        <input type="text" 
        placeholder='Adicione uma tarefa'
        value={text}
        onChange={e => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        />
    </C.Container>
  )
}

export default AddArea