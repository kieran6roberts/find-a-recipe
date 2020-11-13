import RecipeContainer from "../components/Button/Button";
import { render, screen, fireEvent } from "@testing-library/react";

describe("<RecipeContainer />", () => {
    test("renders", () => {
      render(<RecipeContainer><li>Test child</li></RecipeContainer>);
      expect(screen.getByText(/Test child/)).toBeInTheDocument();
    });
});
