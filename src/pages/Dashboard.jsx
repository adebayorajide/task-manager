import Menu from "../Menu.jsx";
import alltask from"../images/all.png";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="container">
      <aside>
        <Menu />
      </aside>
      <div className="dashboard">
        <div className="dashboardProject">
          <header className="header">
            <h5>Hello Tosin</h5>
            <div>
              {/* <img src="" alt="profilepicture" /> &nbsp; Tosin */}
              <Link to="/login">
                <button>logout</button>
              </Link>
            </div>
          </header>
          <section className="hero">
            <div>
              <img src={alltask} alt="alltask" />
              <p>All Tasks</p>
              <h3>0</h3>
            </div>
            <div>
              <img src={alltask} alt="alltask" />
              <p>Completed</p>
              <h3>0</h3>
            </div>
            <div>
              <img src={alltask} alt="alltask" />
              <p>In Progress</p>
              <h3>0</h3>
            </div>
            <div>
              <img src={alltask} alt="alltask" />
              <p>Not Started</p>
              <h3>0</h3>
            </div>
          </section>
        </div>
        <button className="add_task">Add Task</button>
      </div>
    </div>
  );
}
export default Dashboard;
