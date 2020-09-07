import React, { useContext } from "react";
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Checkbox,
    IconButton,
    ListItemSecondaryAction,
    Grid
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";

import { useStyles} from "../../styled/Todo/global";
import { AppContext } from "./AppContext";
import { ContextInterface, TodoListProps } from "../../interfaces";

export const TodoList: React.FC<TodoListProps> = ({ removeHandler, toggleHandler }) => {
    const classes = useStyles();
    const { state }: ContextInterface = useContext(AppContext);

    return (
        <Grid container justify="center">
            <List className={classes.root}>
                {state.todoList.map(todo => {
                    return (
                        <ListItem
                            key={todo.id}
                            role={undefined}
                            dense
                            button
                            onClick={() => toggleHandler(todo.id)}
                            data-testid="todo-list"
                        >
                            <ListItemIcon>
                                <Checkbox
                                    edge="start"
                                    checked={todo.completed}
                                    tabIndex={-1}
                                    disableRipple
                                />
                            </ListItemIcon>
                            <ListItemText primary={todo.title} />
                            <ListItemSecondaryAction data-testid="delete-btn" onClick={() => removeHandler(todo.id)}>
                                <IconButton edge="end" aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                            </ListItemSecondaryAction>
                        </ListItem>
                    );
                })}
            </List>
        </Grid>
    );
};
