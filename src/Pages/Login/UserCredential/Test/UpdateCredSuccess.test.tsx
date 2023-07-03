import { render, fireEvent, screen } from "@testing-library/react";
import { useNavigate } from "react-router-dom";
import UpdateCredSuccess from "../UpdateCredSuccess";

// Mock the useNavigate hook
const mockNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: () => mockNavigate,
}));

describe("<UpdateCredSuccess />", () => {
    it("should navigate to '/login' when the 'Sign in' button is clicked", () => {

        render(<UpdateCredSuccess />);

        fireEvent.click(screen.getByRole("button", { name: "Sign in" }));

        // Check if the navigation function has been called with the correct path
        expect(mockNavigate).toHaveBeenCalledWith("/login");
    });

    it("should render the success message", () => {
        render(<UpdateCredSuccess />);

        // Check if the success message is rendered
        expect(screen.getByText("Congratulations!!")).toBeInTheDocument();
        expect(
            screen.getByText("Hurrah! You have successfully updated your password")
        ).toBeInTheDocument();
    });

    it("should render the gif image", () => {
        render(<UpdateCredSuccess />);

        // Check if the gif image is rendered
        expect(screen.getByAltText("gifImg")).toBeInTheDocument();
    });
});
