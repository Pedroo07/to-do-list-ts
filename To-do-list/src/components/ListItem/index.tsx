import * as C from './style'
import { Item } from '../../types/Item'
import { useState } from 'react'
type Props = {
    item: Item
}

const ListItem = ({ item }: Props) => {

    const [check, setCheck] = useState(item.done)

    return (
        <C.Container>
            <input type='checkbox'
             checked={check}
             onChange={e => setCheck(e.target.checked)}
             />
            <label className={check ? 'Marcado' : ''}>{item.name}</label>
        </C.Container>
    )
}
export default ListItem
