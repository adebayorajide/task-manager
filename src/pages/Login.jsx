import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
  function handleSubmit(e){
    e.preventDefault()
  }
  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h3>Welcome Back!</h3>
        <div>
          <input type="email" id="email" placeholder="Enter Email" value={email} onChange={(e) =>setEmail(e.target.value)}/>
        </div>
        <div>
          <input type="password" id="password" placeholder="Enter Password" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </div>
        <div>
          <Link to="/dashboard">
            <button className="btn" type="submit">
              Log In
            </button>
          </Link>
        </div>
      </form>
      <section>
        Don't have an account?
        <Link to="/">Signup</Link>
      </section>
    </div>
  );
}

export default Login;
