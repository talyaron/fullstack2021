import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    useParams
  } from "react-router-dom";
function Main() {
    return(
        <div>
            <h1>Blog</h1>
            <Link to="/:id">About</Link>


        </div>
    )
    
}

export default Main;
