import SubHeader from "../components/SubHeader/SubHeader";
import { render, screen } from "@testing-library/react";

describe("<SubHeader />", () => {
  test("renders", () => {
    render(<SubHeader>Child</SubHeader>);
    expect(screen.getByText(/Child/)).toBeInTheDocument();
  });
});