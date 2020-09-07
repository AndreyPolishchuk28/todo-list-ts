export interface ITodo {
    title: string
    id: number
    completed: boolean
}

export interface StateInterface {
    todoList: ITodo[];
}

export interface ContextInterface {
    state: StateInterface;
    dispatch: Function;
}

export enum ActionType {
    ADD_TODO,
    DELETE_TODO,
    COMPLETE_TODO
}

export type TodoListProps = {
    removeHandler(id: number): void
    toggleHandler(id: number): void
};
