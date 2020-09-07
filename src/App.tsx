import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Todo, Finished, NavBar } from "./components/Todo";
import { AppContextProvider } from "./components/Todo/AppContext";

const App: React.FC = () => {
    return (
        <AppContextProvider>
            <BrowserRouter>
                <NavBar/>
                <Switch>
                    <Route path="/" exact component={Todo}/>
                    <Route path="/finished" exact component={Finished}/>
                </Switch>
            </BrowserRouter>
        </AppContextProvider>
  );
};

export default App;
