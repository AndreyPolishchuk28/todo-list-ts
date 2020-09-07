import React from "react";
import { render, screen } from "@testing-library/react";

import { NavBar } from "../../components/Todo";

describe("navBar component", () => {
    test("render NavBar", () => {
        render(<NavBar/>);
        expect(screen.getByTestId("navigation")).toBeInTheDocument();
        expect(screen.getByText("All notes")).toBeInTheDocument();
        expect(screen.getByText("Finished")).toBeInTheDocument();
    })
});
