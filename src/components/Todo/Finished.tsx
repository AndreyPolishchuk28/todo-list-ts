import React, { useContext } from "react";
import {
    Checkbox,
    IconButton,
    List,
    ListItem,
    ListItemIcon,
    ListItemSecondaryAction,
    ListItemText,
    Grid
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import { ContextInterface } from "../../interfaces";
import { AppContext } from "./AppContext";
import { completeTodo, deleteTodo } from "../../store/reducer";
import { useStyles } from "../../styled/Todo/global";


export const Finished: React.FC = () => {
    const classes = useStyles();
    const { state, dispatch }: ContextInterface = useContext(AppContext);

    const removeHandler = (id: number) => {
        dispatch(deleteTodo(id));
    };

    const toggleHandler = (id: number) => {
        dispatch(completeTodo(id));
    };

    return (
        <Grid container justify="center">
            <List className={classes.root}>
                {state.todoList.map(todo => todo.completed ?
                    <ListItem key={todo.id} role={undefined} dense button onClick={() => toggleHandler(todo.id)}>
                        <ListItemIcon>
                            <Checkbox
                                edge="start"
                                checked={todo.completed}
                                tabIndex={-1}
                                disableRipple
                            />
                        </ListItemIcon>
                        <ListItemText primary={todo.title} />
                        <ListItemSecondaryAction onClick={() => removeHandler(todo.id)}>
                            <IconButton edge="end" aria-label="delete">
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>: null
                    )}
            </List>
        </Grid>
    );
};
