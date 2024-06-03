import logo from './logo.svg';
import './App.css';
import { PersonForm } from './components/PersonForm';
import { TodoForm } from './components/TodoForm';

function App() {
  return (
    <div className="App">
      <PersonForm />
      <br />
      <TodoForm />
    </div>
  );
}

export default App;
