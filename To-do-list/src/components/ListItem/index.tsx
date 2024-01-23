import * as C from './style'
import { Item } from '../../types/Item'
import { useState } from 'react'
type Props = {
    item: Item,
    onDelete:(id: number) => void
}

const ListItem = ({ item, onDelete}: Props) => {
    const handleDelete =  () => {
        onDelete(item.id)
    }

    const [check, setCheck] = useState(item.done)

    return (
        <C.Container>
            <div>
                <input type='checkbox'
                 checked={check}
                 onChange={e => setCheck(e.target.checked)}
                 />
                <label className={check ? 'Marcado' : ''}>{item.name}</label>
            </div>
            <div><button onClick={handleDelete}>❌</button></div>
        </C.Container>
    )
}
export default ListItem
