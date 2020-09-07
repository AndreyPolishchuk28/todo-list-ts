import React from "react";
import { useHistory } from "react-router";
import { BottomNavigation, BottomNavigationAction } from "@material-ui/core";
import NotesIcon from "@material-ui/icons/Notes";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

import { useStyles} from "../../styled/Todo/navbar";

export const NavBar: React.FunctionComponent = () => {
    const history = useHistory();
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
            showLabels
            className={classes.navBar}
            data-testid="navigation"
        >
            <BottomNavigationAction onClick={() => history.push("/")} label="All notes" icon={<NotesIcon />}/>
            <BottomNavigationAction onClick={() => history.push("/finished")} label="Finished" icon={<CheckCircleIcon />}/>
        </BottomNavigation>
    );
};
