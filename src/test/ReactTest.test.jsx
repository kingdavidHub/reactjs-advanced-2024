// import { describe, expect, it } from "vitest";

import { fireEvent, render, screen } from "@testing-library/react";
import ReactTest from "../components/ReactTest";
import { expect, test } from "vitest";
import FeedbackForm from "../components/Feedback/FeedbackForm";

// importing the global in the vite.config file making the test method global we won't need to import it again in the test file


describe("Test", () => {
  it("Testing the vitest 🤣", () => {
    expect(true).toBeTruthy();
  })
})



// testing the link in react ReactTest component if it always present
test("Renders a link that points to Little lemon webpage", () => {
  render(<ReactTest />);

  // screen is creating a query in document.body if it can fin an element inside with a string little lemon resturant if not it will throw an error
  const linkElement = screen.getByText(/Little Lemon Resturant/i);

  // global expect function in jest utility checks if the Link element is present in the document
  expect(linkElement).toBeInTheDocument();
})


describe("Feedback form", () => {
  test("Submit button should be disabled if score is lower than 5 and there is no feedback form", () => {
    // used jest to mock the function
    const handleSubmit = jest.fn();
    render(<FeedbackForm onSubmit={handleSubmit}/>);


    // screen(utility object from react testing library) is creating a query in document.body if it can fin an element inside with a string score input 
    const rangeInput = screen.getByLabelText('/Score:/');
    // fireevemt.change() is just like onChange in react where here only on is removed and it the same for all other methods(click, submit etc);
    fireEvent.change(rangeInput, {target: {value: "4"}});

    const submitButton = screen.getByRole('button', {name: 'Submit'});
    // to perform a button click i have to use fireEvent.click(); but to check if button is disabled i have to use toHaveAttribute();
    fireEvent.click(submitButton);

    expect(handleSubmit).not.toBeCalled();
    // expect(submitButton).toBeDisabled().t
    expect(submitButton).toHaveAttribute("disabled");
  });
});