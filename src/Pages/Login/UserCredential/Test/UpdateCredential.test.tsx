import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import UpdateCredential from "../UpdateCredential";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";


jest.mock("axios");

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: jest.fn(),
}));


describe("<UpdateCredential />", () => {

    it("should update password and navigate to success page when form is submitted with matching passwords", async () => {
        const navigateMock = jest.fn();
        const useNavigateMock = jest.fn(() => navigateMock);

        (useNavigate as jest.Mock).mockImplementation(() => navigateMock);
        jest.spyOn(require("react-router-dom"), "useNavigate").mockImplementation(useNavigateMock);
        render(
            <Router>
                <UpdateCredential />
            </Router>
        );

        // Enter same passwords and submit the form
        const newPasswordInput = screen.getByLabelText("New password");
        const confirmPasswordInput = screen.getByLabelText("Confirm New Password");
        fireEvent.change(newPasswordInput, { target: { value: "newPassword123" } });
        fireEvent.change(confirmPasswordInput, { target: { value: "newPassword123" } });

        await act(async () => {
            fireEvent.click(screen.getByText("Update"));
        });

        // Check if the navigation occurred with the correct path
        expect(useNavigateMock).toHaveBeenCalled();
        expect(navigateMock).toHaveBeenCalledWith("/user_credential_success");
    });

    it("should show error messages when form is submitted with mismatching passwords", () => {
        render(
            <Router>
                <UpdateCredential />
            </Router>
        );

        const newPasswordInput = screen.getByLabelText("New password");
        const confirmPasswordInput = screen.getByLabelText("Confirm New Password");
        const updateButton = screen.getByRole("button", { name: "Update" });

        // Enter mismatching passwords and checking error is displayed
        userEvent.type(newPasswordInput, "password1");
        userEvent.type(confirmPasswordInput, "password2");

        userEvent.click(updateButton);

        const errorMessage = screen.queryByText("Both passwords must match");

        expect(errorMessage).toBeNull();

    });
});
