import { useState } from 'react';
import './App.css';
import Input from '../InputComponent'
import Header from '../Header'
import List from '../List'

function App() {
  const [todo, setTodo] = useState([])
  function addTodo(item) {
    setTodo([...todo, item])
  }
  function removeTodo(index) {
    setTodo([...todo.slice(0, index), ...todo.slice(index + 1)])
  }
  return (
    <div className="App">
      <Header />
      <Input onAdd={addTodo} />
      <List onAdd={removeTodo} />
    </div>
  );
}

export default App;
