import { useState, } from 'react';
import Input from './components/Input';
import GroceryList from './components/GroceryList';

const App = () => {
  const grocerylist = useState([
    { id: 1, name: 'Apples', complete: true },
    { id: 2, name: 'Bananas', complete: false },
    { id: 3, name: 'Strawberries', complete: false },
  ])
  
  return(
    <>
      <Input />
      <GroceryList 
        name="GroceryList"
        items={grocerylist}
      />
    </>
  )
}

export default App;