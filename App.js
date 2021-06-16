import {useState} from 'react'
import Header from './componnents/Header'
import Tasks from './componnents/Tasks'
import AddTask from './componnents/AddTask'

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTaks ] = useState([
    {
        id: 1,
        text: 'Doctors appointment',
        day: 'Feb 5',
        reminder: true,
    },
    {
        id: 2,
        text: 'School meeting',
        day: 'Feb 4',
        reminder: true,
    },
    {
        id: 3,
        text: 'Shopping',
        day: 'Feb 8',
        reminder: false,
    }
])
// Add Task
const addTask = (task) => {
const id = Math.floor(Math.random() * 10000)+1
const newTask ={ id, ...task }
setTaks([...tasks, newTask])
}
// Delete Task
const deleteTask = (id) => {
setTaks(tasks.filter((task) => task.id !== id))
}

// Toggle Reminder
const toggleReminder = (id) => {
  setTaks(
    tasks.map((task) => 
  task.id === id ?  {...task, reminder:
     !task.reminder } : task

  )
  )
}


  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)}
      showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? <Tasks  tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks to show'}
    </div>
  )
}

export default App
