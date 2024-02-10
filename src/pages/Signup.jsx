import { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');



  function handleSubmit(e){
    e.preventDefault()
  }
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h1>Task Manager</h1>
        <p>Hello there, Welcome to Task manager!</p>
        <div>
          <input
            type="text"
            id="username"
            placeholder="Enter Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div>
          <input
            type="email"
            id="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            id="confirm-password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div>
          <Link to="/dashboard">
            <button className="btn" type="submit">
              Create an Account
            </button>
          </Link>
        </div>
      </form>
      <section>
        Already have an account?
        <Link to="/login">login</Link>
      </section>
    </div>
  );
}
export default Signup;
