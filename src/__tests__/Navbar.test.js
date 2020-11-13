import Button from "../components/Button/Button";
import { render, screen} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";

describe("<Navbar />", () => {
    test("render", () => {
        render(
            <MemoryRouter>
                <Navbar />
            </MemoryRouter>
        )

        expect(screen.getByText("browse")).toBeInTheDocument();
        expect(screen.getByText("my recipes")).toBeInTheDocument();
    });
});
