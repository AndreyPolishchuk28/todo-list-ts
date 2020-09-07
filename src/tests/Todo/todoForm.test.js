import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";

import { TodoForm } from "../../components/Todo/TodoForm";


describe("TodoForm component", () => {
    const mockHandle = jest.fn();

    test("renders TodoForm component", () => {
        render(<TodoForm onAdd={mockHandle}/>);
        expect(screen.getByText("Press ENTER or click on button to add your todo list")).toBeInTheDocument();
        expect(screen.getByLabelText("Enter the name of todo list")).toBeInTheDocument();
    });

    test("keyPress events", () => {
        render(<TodoForm onAdd={mockHandle}/>);
        fireEvent.keyPress(screen.getByTestId("input"), { key: 'Enter', code: 'Enter' });
    });

    test("change events", () => {
        render(<TodoForm onAdd={mockHandle}/>);
        const input = screen.getByLabelText("Enter the name of todo list");
        fireEvent.change(input, {target: {value: 'a'}});
        expect(input.value).toBe("a")
    })
});
