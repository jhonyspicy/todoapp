import './App.css';
import { Title } from './components/Title';
import { InputForm } from './components/InputForm';
import { TodoList } from './components/TodoList';
import { useState } from 'react';

function App() {
  const [taskList, setTaskList] = useState([
    { id: 1, text: 'プログラミング', completed: false },
    { id: 2, text: '買い物', completed: false },
    { id: 3, text: '掃除', completed: false },
  ]);

  return (
    <div className="body">
      <Title />
      <InputForm taskList={taskList} setTaskList={setTaskList} />
      <TodoList taskList={taskList} setTaskList={setTaskList} />
    </div>
  );
}

export default App;
