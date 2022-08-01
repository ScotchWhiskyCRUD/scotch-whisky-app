import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <h2>Register Page</h2>

      <form action="/register" method="POST">
        <input name="userName" type="text" placeholder="Enter username" spellcheck="false" required/><br/>
        <input name="password" type="password" placeholder="Enter password" spellcheck="false" autocomplete="off" required/><br/>
        <button type="submit">Submit</button>
      </form>  

      <Link to="/login">Log into account</Link>
    </>
  )
}

export default Register;