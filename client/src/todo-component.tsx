import React from "react";
import { useGetTodosQuery } from "./generated/graphql";

function TodoComponent() {

    const { data, error, loading } = useGetTodosQuery();

    if (loading) {
        return (
            <div>Please wait ! its loading</div>
        );
    }

    if (error) {
        return (
            <div>Something went wrong !</div>
        );
    }

    return (
        <div>
            <h4>Todo List</h4>
            <ul className="todos">
                {
                    data?.getTodos.map(({ name, _id, createDate }) => {
                        return (
                            <li key={_id} className="todos__item">
                                <div className="todo">
                                    <div className="todo__content">
                                        <h4>{name}</h4>
                                        <label>{_id}</label>
                                        <label>{new Date(createDate).toLocaleDateString()}</label>
                                    </div>
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    )
}

export default TodoComponent;