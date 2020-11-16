import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import PageNav from "../components/PageNav/PageNav";

describe("<PageNav />", () => {
    test("render with props", () => {
        const testLinks = [
            {
                id: "test ID",
                subPath: "/test",
                text: "test link"
            },
            {
                id: "test ID2",
                subPath: "/test2",
                text: "test link2"
            },
        ];
        render(
            <MemoryRouter>
                <PageNav 
                header="browse"
                url="/browse"
                links={testLinks}
                />
            </MemoryRouter>
        )

        expect(screen.getByText("browse")).toBeInTheDocument();
        expect(screen.getByText("test link")).toBeInTheDocument();
        expect(screen.getByText("test link2")).toBeInTheDocument();
    });
});
