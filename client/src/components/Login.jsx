import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <h2>Login Page</h2>

      <form action="/login" method="POST">
        <input name="userName" type="text" placeholder="Enter username" spellcheck="false" required/><br/>
        <input name="password" type="password" placeholder="Enter password" spellcheck="false" autocomplete="off" required/><br/>
        <button type="submit">Submit</button>
      </form> 

      <Link to="/register">Register an account</Link>
    </>
  )
}

export default Login;