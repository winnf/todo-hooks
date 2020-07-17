import React, { useState } from 'react';
import './App.css';

function Todo({todo, index, completeTodo, deleteTodo}){
  return (
    <div className="todo" style={{textDecoration: todo.isCompleted ? 'line-through' : ''}}>
      { todo.text }
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => deleteTodo(index)}>x</button>
      </div>
    </div>
  );
}

function TodoForm({addTodo}){
  const [value, setValue] = useState(''); //value is the state, setValue is the method that updates the state
  const handleSubmit = e => {
    e.preventDefault();
    if(!value) return;
    addTodo(value);
    setValue('');
  }
  return (
    <form onSubmit = {handleSubmit}>
      <input type="text" className="input" value={value} placeholder="Add todo..." onChange={e => setValue(e.target.value)}/>
    </form>
  )
}


function App() {
  const [todos, setTodos] = useState([ //todos is the state
    {
      text: 'Learn about React',
      isCompleted: false
    },
    {
      text: 'Meet friend for lunch',
      isCompleted: false
    },
    {
      text: 'Build',
      isCompleted: false
    }
  ]);

const addTodo = text => {
  const newTodos = [...todos, { text }];
  setTodos(newTodos);
};

const completeTodo = index => {
  const newTodos = [...todos];
  newTodos[index].isCompleted = true;
  setTodos(newTodos);
};

const deleteTodo = index => {
  const newTodos = [...todos];
  newTodos.splice(index,1); //splice(index to start changing arr, # elements to remove from star)
  setTodos(newTodos);
};

return (
  <div className = "app">
    <div className="todo-list">
      {todos.map((todo, index) => (
        <Todo
          key={index}
          index={index}
          todo={todo}
          completeTodo={completeTodo}
          deleteTodo={deleteTodo}
        />
      ))}
      <TodoForm addTodo={addTodo} />
    </div>
  </div>
  )
}

export default App;
