import {React,useState, components } from 'react'

function TodoItem (props) {
    return(
        <li key={props.key} >
            <span>C</span>
            <p>{props.text}</p>
            <span>X</span>
        </li>
    )
}


export default TodoItem