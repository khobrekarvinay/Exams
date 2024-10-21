import logo from './logo.svg';
import './App.css';
import { TaskProvider } from './TaskContext';
import TaskComponent from './components/TaskComponent';


function App() {
  return (
    
      <TaskProvider>
<div>
  <h1>Task Manager</h1>
  <TaskComponent/>
</div>
      </TaskProvider>
    
  );
}

export default App;
