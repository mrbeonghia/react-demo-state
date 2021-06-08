import React from "react";

const Student =  (props) => {
    return(
        <div>
            <h2>Welcome, I'm a functional component</h2>
            <h2>{props.children}</h2>
            <ul>
                <li><b>Name: </b>{props.name} </li>
                <li><b>Age: </b>{props.age} </li>
                <li><b>Gender: </b>{props.gender} </li>
            </ul>
        </div>
    )
}

export default Student;