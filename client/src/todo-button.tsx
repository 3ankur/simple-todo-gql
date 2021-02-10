import React, { useState } from "react";
import { useAddTodoMutation } from "./generated/graphql";

interface todoProps {};

const  AddNewTodo: React.FC<todoProps> = ({}) => {
    const [hasNewTodo, toggleTodoButton] = useState(false);
    const [todoName,setTodoName] = useState('');
    const [addTodoMutation, { data, loading, error }] = useAddTodoMutation({
           variables: {
              name: todoName
           },
         });
   // console.log();

  async function saveNewTodo(){
    console.log("I am calling it ")
    const data = await addTodoMutation();
    console.log(data);
    setTodoName('');
   }
    return (
        <div className="addtodo">
            <div className="addtodo__button">
                <button onClick={()=>toggleTodoButton(!hasNewTodo)} className="button">Add New Todo</button>
            </div>
            {
                hasNewTodo ? (<div className="addtodo__input">
                    <input type="text" value={todoName} onChange={(e)=> setTodoName(e.target.value)} />
                    <button onClick={saveNewTodo}>Save</button>
                </div>) : null
            }

        </div>
    );
}

export default AddNewTodo;