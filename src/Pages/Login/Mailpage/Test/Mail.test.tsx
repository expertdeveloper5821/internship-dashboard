import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { SentMail } from "../SentMail";
import { BrowserRouter as Router } from "react-router-dom";

describe("<SentMail />", () => {
    it("should render the SentMail component correctly", () => {
        render(
            <Router>
                <SentMail />
            </Router>
        );

        expect(screen.getByAltText("Tg-logo")).toBeInTheDocument();
        expect(screen.getByText("Check Your Email")).toBeInTheDocument();
        expect(
            screen.getByText("We have sent you a reset password link on harry@gmail.com")
        ).toBeInTheDocument();
        expect(screen.getByAltText("mailsent-logo")).toBeInTheDocument();
        expect(screen.getByText("Validate OTP")).toBeInTheDocument();
    });

    it("should navigate to '/verified' when the Validate OTP button is clicked", () => {
        render(
            <Router >
                <SentMail />
            </Router>
        );

        const validateOTPButton = screen.getByText("Validate OTP");
        fireEvent.click(validateOTPButton);
    });
});

