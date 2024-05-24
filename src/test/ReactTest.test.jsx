// import { describe, expect, it } from "vitest";

import { render, screen } from "@testing-library/react";
import ReactTest from "../components/ReactTest";

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