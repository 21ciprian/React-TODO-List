import { useState } from 'react';
import './App.css';
import Input from '../InputComponent'
import Header from '../Header'

function App() {
  const [todo, setTodo] = useState([])
  function addTodo(item) {
    setTodo([...todo, item])
  }
  return (
    <div className="App">
      <Header />
      <Input onAdd={addTodo} />
    </div>
  );
}

export default App;
