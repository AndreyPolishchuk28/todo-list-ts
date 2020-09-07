import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import { AppContextProvider } from "../../components/Todo/AppContext";
import { Todo } from "../../components/Todo";


describe("App component", () => {
   test("App", () => {
       render (
           <AppContextProvider>
               <Todo/>
           </AppContextProvider>);
       fireEvent.click(screen.getByTestId("add-btn"));
       expect(screen.getByTestId("todo-list")).toBeInTheDocument();
       expect(screen.getByTestId("delete-btn")).toBeInTheDocument();

       fireEvent.click(screen.getByTestId("delete-btn"));
       expect(screen.queryByTestId("todo-list")).not.toBeInTheDocument();
   })
});
