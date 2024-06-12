import React, { useState } from 'react';
import { v4 as getId } from 'uuid';
import Greeter from './components/Greeter';
import ShopptingList from './components/ShoppingList';
import ShoppingListForm from './components/ShoppingListForm';
import Item from './models/item';
import './App.css';

function App() {
  const [items, setItems] = useState<Item[]>([]);

  const addItem = (product: string, quantity: number) => {
    console.log('made to the app component');
    console.log(product);
    setItems([...items, { id: getId(), product, quantity: 1 }]);
  };
  // const items = [
  //   {
  //     id: 1,
  //     product: 'Lemon',
  //     quantity: 3,
  //   },
  //   {
  //     id: 2,
  //     product: 'Chicken Breast',
  //     quantity: 2,
  //   },
  // ];
  return (
    <div>
      {/* <Greeter person="Colt" />
      <Greeter person="Blue" />
      <Greeter person="Eleton" /> */}
      <ShopptingList items={items} />
      <ShoppingListForm onAddItem={addItem} />
    </div>
  );
}

export default App;
