import { useState } from "react";
import uuid from 'react-uuid';

const AddTodo = ({add}) =>{
    console.log('hi1')
const [input,setInput] = useState("")

const hadd = () =>{
    add({
    title : input,
    id:uuid(),
    isDone: false
})
}

return(
    <>
    <input onChange={(e) =>{ setInput(e.target.value)}} placeholder="set todo"/>
    <button onClick={ () => hadd()} >Add</button>
    </>
)
}

export default AddTodo;