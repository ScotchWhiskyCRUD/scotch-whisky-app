import React from "react";
import { Link } from "react-router-dom";


const ErrorPage = () => {
  return (
    <>
      <h2>Error: 404</h2>
      <h3>Page Not Found!</h3>
      <Link to="/">Go home</Link>
    </>
  )
}

export default ErrorPage