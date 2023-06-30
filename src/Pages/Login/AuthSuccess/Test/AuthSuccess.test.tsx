import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AuthSuccess from "../AuthSuccess";
import { BrowserRouter as Router } from "react-router-dom";

describe("<AuthSuccess />", () => {
    it("should render the AuthSuccess component correctly", () => {
        render(
            <Router>
                <AuthSuccess />
            </Router>
        );

        expect(screen.getByAltText("Tg-logo")).toBeInTheDocument();
        expect(screen.getByText("Verifed!!")).toBeInTheDocument();
        expect(
            screen.getByText("Hurrah! You have successfully verified the account.")
        ).toBeInTheDocument();
        expect(screen.getByAltText("gifImg")).toBeInTheDocument();
        expect(screen.getByText("Get Started")).toBeInTheDocument();
    });

    it("should navigate to '/user_credential' when the Get Started button is clicked", () => {
        render(
            <Router>
                <AuthSuccess />
            </Router>
        );

        const getStartedButton = screen.getByText("Get Started");
        fireEvent.click(getStartedButton);
    });
});
