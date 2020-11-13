import Button from "../components/Button/Button";
import { render, screen, fireEvent } from "@testing-library/react";

describe("<Button />", () => {
    test("render", () => {
        render(<Button>test child</Button>);

        expect(screen.getByText(/test child/)).toBeInTheDocument();

    });
    test("button click event", () => {
        const mockFn = jest.fn();
        render(
            <Button
                onClickFunc={mockFn}
                className="test class">
                    test child
            </Button>)

        const button = screen.getByRole("button");
        fireEvent.click(button);

        expect(mockFn).toHaveBeenCalled();
    })
});