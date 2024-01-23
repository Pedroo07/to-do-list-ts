
type  Item = {
id: number
name: string
done: boolean}


const handleRemoveItem = (list: Item[], idToRemove: number): Item[] => {
    return list.filter(item =>  item.id !== idToRemove)

}
  export default handleRemoveItem