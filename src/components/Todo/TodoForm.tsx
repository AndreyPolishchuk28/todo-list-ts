import React, { useState } from "react";
import { TextField, Grid, Typography, Button } from "@material-ui/core";

import { useStyles} from "../../styled/Todo/todoForm";

interface todoFormProps {
    onAdd(title: string): void;
}

export const TodoForm: React.FC<todoFormProps> = props => {
    const [title, setTitle] = useState<string>("");
    const classes = useStyles();

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    };

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === "Enter") {
            props.onAdd(title);
            setTitle("");
        }
    };

    const clickHandler = (event: any) => {
        props.onAdd(title);
        setTitle("");
    };

    return (
        <>
            <Grid container  justify="center">
                <TextField
                    value={title}
                    id="standard-basic"
                    label="Enter the name of todo list"
                    onKeyPress={keyPressHandler}
                    onChange={changeHandler}
                    className={classes.input}
                    data-testid="input"
                />
            </Grid>
            <Grid className={classes.button} container justify="center" >
                <Button data-testid='add-btn' onClick={clickHandler} variant="contained" color="primary">
                    Add Todo
                </Button>
            </Grid>
            <Grid container justify="center">
                <Typography variant="body2" color="inherit">
                    Press ENTER or click on button to add your todo list
                </Typography>
            </Grid>
        </>
    );
};
