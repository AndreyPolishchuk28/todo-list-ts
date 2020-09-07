import React, { useContext } from "react";

import { TodoForm } from "./TodoForm";
import { TodoList } from "./TodoList";
import { ContextInterface, ITodo } from "../../interfaces";
import { AppContext } from "./AppContext";
import { add, deleteTodo, completeTodo } from "../../store/reducer";

export const Todo = () => {
    const { dispatch }: ContextInterface = useContext(AppContext);

    const addTodo = (title: string): void => {
        const newTodo: ITodo = {
            title: title,
            id: Date.now(),
            completed: false
        };
        dispatch(add(newTodo));
    };

    const removeHandler = (id: number) => {
        dispatch(deleteTodo(id));
    };

    const toggleHandler = (id: number) => {
        dispatch(completeTodo(id));
    };

    return (
        <div>
            <TodoForm onAdd={addTodo}/>
            <TodoList removeHandler={removeHandler} toggleHandler={toggleHandler}/>
        </div>
    );
};
