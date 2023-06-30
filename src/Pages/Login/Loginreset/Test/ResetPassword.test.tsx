import { render, fireEvent, screen } from "@testing-library/react";
import { ResetPassword } from "../ResetPassword";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: jest.fn(),
}));

describe("<ResetPassword />", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it("should render the ResetPassword component correctly", () => {
        render(
            <Router>
                <ResetPassword />
            </Router>
        );

        expect(screen.getByText("Forgot Password")).toBeInTheDocument();
        expect(screen.getByLabelText("Email")).toBeInTheDocument();
        expect(screen.getByRole("button", { name: "Recover Password" })).toBeInTheDocument();
        expect(screen.getByText("Remember it? Sign in here")).toBeInTheDocument();
    });

    it("should enable the Recover Password button when a valid email is entered", () => {
        render(
            <Router>
                <ResetPassword />
            </Router>
        );

        const emailInput = screen.getByLabelText("Email");
        const recoverPasswordButton = screen.getByRole("button", { name: "Recover Password" });

        fireEvent.change(emailInput, { target: { value: "abc@example.com" } });

        expect(recoverPasswordButton).toBeEnabled();
    });

    it("should disable the Recover Password button when an invalid email is entered", () => {
        render(
            <Router>
                <ResetPassword />
            </Router>
        );

        const emailInput = screen.getByLabelText("Email");
        const recoverPasswordButton = screen.getByRole("button", { name: "Recover Password" });

        fireEvent.change(emailInput, { target: { value: "invalid-email" } });

        expect(recoverPasswordButton).toBeDisabled();
    });

    it("should navigate to 'mailsent' when the Recover Password button is clicked", () => {
        const navigateMock = jest.fn();
        (useNavigate as jest.Mock).mockImplementation(() => navigateMock);

        render(
            <Router>
                <ResetPassword />
            </Router>
        );

        const emailInput = screen.getByLabelText("Email");
        const recoverPasswordButton = screen.getByRole("button", { name: "Recover Password" });

        fireEvent.change(emailInput, { target: { value: "abc@example.com" } });
        fireEvent.click(recoverPasswordButton);

        expect(navigateMock).toHaveBeenCalledWith("/mailsent");
    });
});
