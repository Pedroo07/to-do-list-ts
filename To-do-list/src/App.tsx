import * as C from './App.styles'
import { useState } from 'react'
import {Item} from './types/Item'
import ListItem from './components/ListItem'
import  AddArea  from "./components/AddArea";
const App = () => {
  const [list, setList] = useState<Item[]>([
    {id: 1, name:'Estudar TypeScript', done: true},
    {id: 2, name: 'Bla bla', done: false}
  ])

  const handleTask = (taskName: string) =>  {
    let newList = [...list]
    newList.push({
      id: list.length + 1,
      name:taskName,
      done: false
    })
    setList(newList)
  }
  const handleDeleteItem = (id: number) => {
    const newList = list.filter(item => item.id !== id)
    setList(newList)
  }

  return (
    <C.Container>
     <C.Area>
      <C.Header>Lista de Tarefas</C.Header>

      <AddArea  onEnter={handleTask}/>

      {list.map((item, index) => (<ListItem key={index} item={item} onDelete={handleDeleteItem}/>)) }

     </C.Area>
    </C.Container>
  )
}

export default App 