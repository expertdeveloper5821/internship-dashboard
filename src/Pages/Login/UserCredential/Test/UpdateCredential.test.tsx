// // import { render, fireEvent, screen, waitFor } from "@testing-library/react";
// // import UpdateCredential from "../UpdateCredential";
// // import { BrowserRouter as Router, useNavigate } from "react-router-dom";
// // import userEvent from "@testing-library/user-event";
// // import { act } from "react-dom/test-utils";


// // jest.mock("axios");

// // jest.mock("react-router-dom", () => ({
// //     ...jest.requireActual("react-router-dom"),
// //     useNavigate: jest.fn(),
// // }));


// // describe("<UpdateCredential />", () => {

// //     it("should update password and navigate to success page when form is submitted with matching passwords", async () => {
// //         const navigateMock = jest.fn();
// //         const useNavigateMock = jest.fn(() => navigateMock);

// //         (useNavigate as jest.Mock).mockImplementation(() => navigateMock);
// //         jest.spyOn(require("react-router-dom"), "useNavigate").mockImplementation(useNavigateMock);
// //         render(
// //             <Router>
// //                 <UpdateCredential />
// //             </Router>
// //         );

// //         // Enter same passwords and submit the form
// //         const newPasswordInput = screen.getByLabelText("New password");
// //         const confirmPasswordInput = screen.getByLabelText("Confirm New Password");
// //         fireEvent.change(newPasswordInput, { target: { value: "newPassword123" } });
// //         fireEvent.change(confirmPasswordInput, { target: { value: "newPassword123" } });

// //         await act(async () => {
// //             fireEvent.click(screen.getByText("Update"));
// //         });

// //         // Check if the navigation occurred with the correct path
// //         expect(useNavigateMock).toHaveBeenCalled();
// //         expect(navigateMock).toHaveBeenCalledWith("/user_credential_success");
// //     });

// //     it("should show error messages when form is submitted with mismatching passwords", () => {
// //         render(
// //             <Router>
// //                 <UpdateCredential />
// //             </Router>
// //         );

// //         const newPasswordInput = screen.getByLabelText("New password");
// //         const confirmPasswordInput = screen.getByLabelText("Confirm New Password");
// //         const updateButton = screen.getByRole("button", { name: "Update" });

// //         // Enter mismatching passwords and checking error is displayed
// //         userEvent.type(newPasswordInput, "password1");
// //         userEvent.type(confirmPasswordInput, "password2");

// //         userEvent.click(updateButton);

// //         const errorMessage = screen.queryByText("Both passwords must match");

// //         expect(errorMessage).toBeNull();

// //     });
// // });


import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter, useNavigate } from "react-router-dom";
import UpdateCredential from "../UpdateCredential";
import { updatepassword } from "../UpdateCredentialApi/UpdateCredAction";
import { store } from "../../../../app/store";

jest.mock("../UpdateCredentialApi/UpdateCredAction", () => ({
    updatepassword: jest.fn(),
}));

jest.mock("react-router-dom", () => ({
    ...jest.requireActual("react-router-dom"),
    useNavigate: jest.fn(),
}));

describe("UpdateCredential Component", () => {
    let navigate: any;
    let mockUpdatePassword;

    beforeEach(() => {
        navigate = jest.fn();
        mockUpdatePassword = jest.fn();
        useNavigate.mockReturnValue(navigate);
        updatepassword.mockReturnValue(mockUpdatePassword);
    });

    it("renders the update password form correctly", () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <UpdateCredential />    
                </MemoryRouter>
            </Provider>
        );

        // Assertions for form elements
        const newPasswordInput = screen.getByLabelText("New password");
        const confirmPasswordInput = screen.getByLabelText("Confirm New Password");
        const updateButton = screen.getByRole("button", { name: "Update" });

        expect(newPasswordInput).toBeInTheDocument();
        expect(confirmPasswordInput).toBeInTheDocument();
        expect(updateButton).toBeInTheDocument();
    });

    it("updates the password with valid input", async () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <UpdateCredential />
                </MemoryRouter>
            </Provider>
        );

        // Set input values
        const newPasswordInput = screen.getByLabelText("New password");
        const confirmPasswordInput = screen.getByLabelText("Confirm New Password");
        fireEvent.change(newPasswordInput, { target: { value: "newpassword" } });
        fireEvent.change(confirmPasswordInput, { target: { value: "newpassword" } });

        // Click the update button
        const updateButton = screen.getByRole("button", { name: "Update" });
        fireEvent.click(updateButton);

        // Assertions for dispatched action and navigation
        expect(updatepassword).toHaveBeenCalledWith({
            newPassword: "newpassword",
            confirmPassword: "newpassword",
            // Add other required values for the action payload
        });
        await waitFor(() => {
            expect(navigate).toHaveBeenCalledWith("/user_credential_success");
        });
    });

    it("displays error messages for invalid input", () => {
        render(
            <Provider store={store}>
                <MemoryRouter>
                    <UpdateCredential />
                </MemoryRouter>
            </Provider>
        );

        // Click the update button without entering any values
        const updateButton = screen.getByRole("button", { name: "Update" });
        fireEvent.click(updateButton);

        // Assertions for error messages
        const newPasswordError = screen.getByText("Password must be at least 6 characters");
        const confirmPasswordError = screen.getByText("Both passwords must match");

        expect(newPasswordError).toBeInTheDocument();
        expect(confirmPasswordError).toBeInTheDocument();
    });
});
