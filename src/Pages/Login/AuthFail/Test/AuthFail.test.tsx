import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import AuthFail from "../AuthFail";
import { BrowserRouter as Router } from "react-router-dom";

describe("<AuthFail />", () => {
    it("should render the AuthFail component correctly", () => {
        render(
            <Router>
                <AuthFail />
            </Router>
        );

        expect(screen.getByAltText("Tg-logo")).toBeInTheDocument();
        expect(screen.getByText("Error!!")).toBeInTheDocument();
        expect(
            screen.getByText("Ooops!! Something went wrong please try again.")
        ).toBeInTheDocument();
        expect(screen.getByText("Try again")).toBeInTheDocument();
    });

    it("should navigate to '/user_credential' when the Try again button is clicked", () => {
        render(
            <Router>
                <AuthFail />
            </Router>
        );

        const tryAgainButton = screen.getByText("Try again");
        fireEvent.click(tryAgainButton);
    });
});
