import { Link } from 'react-router-dom';
import dashboards from './images/dashboards.png';
import project from './images/project.png';
import task from './images/task.png';
import users from './images/users.png';
import './App.css'

const Menu = () => {
  return (
    <>
    <h1> TaskManager</h1>
    <nav>
      <ul>
     <li> <Link to="/dashboard" className='link'><img src={dashboards} alt="icon" /> <span>Dashboard</span></Link></li>
    <li> <Link to="/projects" className='link'><img src={project} alt="icon" /> <span>Projects</span></Link></li>
    <li> <Link to="/tasks" className='link'> <img src={task} alt="icon" /> <span>Tasks</span></Link></li>
    <li><Link to="/profile" className='link' ><img src={users} alt="icon" /> <span>Profile</span></Link></li>
    </ul>
    </nav>
    
    </>
  )
}
export default Menu