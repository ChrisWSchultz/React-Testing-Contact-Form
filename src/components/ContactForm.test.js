import React from "react";
import { render, act, fireEvent } from "@testing-library/react";
import ContactForm, { onSubmit } from "./ContactForm";



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

    getByText(/John/i);
});
