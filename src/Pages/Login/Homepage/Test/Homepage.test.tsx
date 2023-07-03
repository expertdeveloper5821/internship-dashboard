import { render, act, screen } from "@testing-library/react";
import Homepage from "../Homepage";
import { BrowserRouter as Router } from "react-router-dom";

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: jest.fn(),
}));

describe("<Homepage />", () => {
    it("should navigate to '/login' after 2 seconds", async () => {
        const mockNavigate = jest.fn();
        jest.useFakeTimers();

        jest.requireMock("react-router-dom").useNavigate.mockReturnValue(mockNavigate);

        render(
            <Router>
                <Homepage />
            </Router>
        );

        expect(screen.getByAltText("Tg-logo")).toBeInTheDocument();

        //2 sec timer
        act(() => {
            jest.advanceTimersByTime(2000);
        });

        // Check if the navigate function is called with the correct path
        expect(mockNavigate).toHaveBeenCalledWith("/login");
    });
});
