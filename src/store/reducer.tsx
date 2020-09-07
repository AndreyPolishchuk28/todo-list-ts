import {StateInterface, ActionType, ITodo} from "../interfaces";

export const add = (payload: ITodo) => ({ type: ActionType.ADD_TODO, payload });

export const deleteTodo = (payload: number) => ({ type: ActionType.DELETE_TODO, payload });

export const completeTodo = (payload: number) => ({ type: ActionType.COMPLETE_TODO, payload });

export const reducer = (state: StateInterface, action: any): StateInterface => {
    switch (action.type) {
        case ActionType.ADD_TODO:
            return {
                ...state,
                todoList: state.todoList.concat(action.payload),
            };
        case ActionType.DELETE_TODO:
            return {
                ...state,
                todoList: state.todoList.filter(elem => elem.id !== action.payload)
            };
        case ActionType.COMPLETE_TODO:
            return {
                ...state,
                todoList: state.todoList.map(todo => {
                    if (todo.id === action.payload) {
                        todo.completed = !todo.completed
                    }
                    return todo
                })
            };
        default: return state
    }
};
