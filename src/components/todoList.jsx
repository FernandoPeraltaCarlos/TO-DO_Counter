import {React, useState } from 'react'

function TodoList (props) {
    return(
        <ul>
            {props.children}
        </ul>
    )
}

export default TodoList