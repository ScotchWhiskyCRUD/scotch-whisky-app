import * as React from "react";
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import App from './App.jsx';



// when we create App we render it here 
// render(<App />, document.getElementById('root'));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);

{/* <Switch>
    <Route exact path='/' component={Home}/> */}


// Crystal's create-react-app syntax
// import ReactDOM from 'react-dom/client';
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//     <App/>
// );

// possibly depreciated syntax?
// reactDom.render(<App />, document.getElementById("root"));

// Jason's syntax: 
// import React from 'react';
// import { createRoot } from 'react-dom/client';
// import App from './App';

// const rootElement = document.getElementById('app');
// const root = createRoot(rootElement);

// root.render(
//     <App/>
// );