import React, { useReducer } from "react";
import { StateInterface, ContextInterface } from "../../interfaces";
import { reducer } from "../../store/reducer";

const initialState: StateInterface = {
    todoList: []
};

export const AppContext = React.createContext({} as ContextInterface);

export const AppContextProvider: React.FC = (props: any) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {props.children}
        </AppContext.Provider>
    );
};
