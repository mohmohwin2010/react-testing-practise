import { render, screen } from "@testing-library/react";
import Greet from "../../src/components/Greet";

describe("Greet", () => {
  //just type d
  it("should render Hello with the name when name is provided ", () => {
    //just type i
    render(<Greet name="Mosh" />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/ mosh/i);
  });
});
