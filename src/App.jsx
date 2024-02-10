import './App.css'
import Dashboard from './pages/Dashboard.jsx'
import Projects from  './pages/Projects.jsx'
import Tasks from  './pages/Tasks.jsx'
import Profile from './pages/Profile.jsx'
import Signup from './pages/Signup.jsx';
import Login from './pages/Login.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() { 
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="projects" element={<Projects />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
