import { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([
    { id: '1', text: 'доделат проект', completed: false },
    { id: '2', text: 'сдат практику', completed: true }
  ]);
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div style={{ width: '450px', background: '#2d2d30', padding: '30px', borderRadius: '12px', boxShadow: '0 8px 24px rgba(0,0,0,0.5)' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '25px', color: '#fff', letterSpacing: '1px' }}>Task Tracker</h2>

      <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '15px', marginBottom: '30px' }}>
        <input 
          type="text" 
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Новая задача..." 
          style={{ flex: 1, padding: '12px 15px', borderRadius: '8px', border: '1px solid #444', background: '#1e1e1e', color: '#fff', outline: 'none' }}
        />
        <button type="submit" style={{ padding: '12px 20px', background: '#8a2be2', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold' }}>
          Добавить
        </button>
      </form>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map(task => (
          <li key={task.id} style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '15px', padding: '15px', borderBottom: '1px solid #444', background: '#333337', borderRadius: '8px' }}>
            <input 
              type="checkbox" 
              checked={task.completed} 
              readOnly 
              style={{ accentColor: '#8a2be2', width: '18px', height: '18px' }} 
            />
            <span style={{ flex: 1, textDecoration: task.completed ? 'line-through' : 'none', color: task.completed ? '#777' : '#e0e0e0', fontSize: '16px' }}>
              {task.text}
            </span>
            <button style={{ padding: '8px 12px', background: 'transparent', color: '#ff5252', border: '1px solid #ff5252', borderRadius: '6px', cursor: 'pointer' }}>
              ✕
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;