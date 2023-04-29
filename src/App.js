import './App.css';
import Header from './Header';
import Nav from './Nav';
import ToDoBox from './ToDoBox';
import { useState, useEffect } from 'react';
import Footer from './Footer';

function App() {
  const [toDoList, setToDoList] = useState([])
  const [newItem, setNewItem] = useState('')
  const [count, setCount] = useState(0)

  useEffect(() => {
    const storeData = JSON.parse(localStorage.getItem('todos'))
    const storedCount = JSON.parse(localStorage.getItem("counter"));
    if (storeData) {
      setToDoList(storeData);
      console.log(storeData, 'done')
    }
    if (storedCount) {
      setCount(storedCount);
      console.log(storedCount, 'count')
    }
  }, [])



  // useEffect(() => {
  //   // if (toDoList.length > 0) {
  //     localStorage.setItem('todos', JSON.stringify(toDoList));
  //     console.log(toDoList, 'setter')
  //   // }
  // }, [toDoList]);

  const addItem = (e) => {
    if (!newItem.trim()) {
      // newItem is empty or contains only whitespace characters
      return;
    }
    e.preventDefault()
    const id = toDoList.length ? toDoList[toDoList.length - 1].id + 1 : 1;
    const newItemAdded = { id, task: newItem, completed: false }
    setNewItem('')
    const listItem = [...toDoList, newItemAdded]
    setToDoList(listItem)
    localStorage.setItem('todos', JSON.stringify(listItem));
  }



  const handleDelete = (id) => {
    const filteredList = toDoList.filter((item) => item.id !== id)
    const counter = filteredList.filter((item) => item.completed).length
    setCount(counter)
    setToDoList(filteredList)
    localStorage.setItem('todos', JSON.stringify(filteredList));
    localStorage.setItem('counter', counter);
  }


  const handleCheckChange = (id) => {
    const mapCheckedList = toDoList.map((item) => item.id === id ? { ...item, completed: !item.completed } : item);
    const counter = mapCheckedList.filter((item) => item.completed).length
    setCount(counter)
    setToDoList(mapCheckedList);
    localStorage.setItem('todos', JSON.stringify(mapCheckedList));
    localStorage.setItem('counter', counter);
  };


  return (
    <div className="App">
      <Header />
      <Nav
        newItem={newItem}
        setNewItem={setNewItem}
        addItem={addItem}
      />

      <ToDoBox
        toDoList={toDoList}
        setToDoList={setToDoList}
        handleDelete={handleDelete}
        handleCheckChange={handleCheckChange}
      />
      <Footer
        count={count} />
    </div>
  );
}

export default App;
