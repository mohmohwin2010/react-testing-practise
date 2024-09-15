import { it, expect, describe } from "vitest"; //import vitest , just type iv
import { render, screen } from "@testing-library/react";
import Greet from "../../src/components/Greet";
import "@testing-library/jest-dom/vitest";

describe("Greet", () => {
  //just type d
  it("should render Hello with the name when name is provided ", () => {
    //just type i
    render(<Greet name="Mosh" />);
    // screen.debug();
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/hello mosh/i);
  });

  //   for login button
  //   it("should render Hello with the name when name is provided ", () => {
  //     //just type i
  //     render(<Greet name="Moh" />);
  //     // screen.debug();
  //     const heading = screen.getByRole("button");
  //     expect(heading).toBeInTheDocument();
  //     expect(heading).toHaveTextContent(/login/i);
  //   });
});
