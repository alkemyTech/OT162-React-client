import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render } from "@testing-library/react";
import NewsletterForm from "./subscribeNewsletterForm";

test("newsletter should be restricted to unauthenticated users", () => {
  const newsLetterForm = render(<NewsletterForm />);
  expect(
    newsLetterForm.getByText("You need to be logged to subscribe to Newsletter")
  ).toBeInTheDocument();
});
