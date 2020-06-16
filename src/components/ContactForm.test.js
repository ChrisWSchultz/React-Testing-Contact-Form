import React from "react";
import { render, act, fireEvent, wait } from "@testing-library/react";
import ContactForm from "./ContactForm";



test("", async () => {
    //Arrange, Act, Assert
    const { getByText } = render(<ContactForm />);

    getByText(/First Name*/i);
});

test("", async () => {
    const { getByText, getByLabelText, getByTestId } = render(<ContactForm />);

    act(() => {
        fireEvent.change(getByLabelText("First Name*"), {target: {value: 'John' }});
        fireEvent.change(getByLabelText("Last Name*"), {target: {value: 'Doe' }});
        fireEvent.change(getByLabelText("Email*"), {target: {value: 'email@email.com' }});
        fireEvent.change(getByLabelText("Message"), {target: {value: 'A message.' }});
        fireEvent.click(getByTestId("submit"));
    });

    wait(() => {
        getByText(/John/i);
        getByText(/Doe/i);
        getByText(/email@email.com/i);
        getByText(/A message/i);
    });
});
