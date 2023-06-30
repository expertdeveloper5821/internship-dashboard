import { render, fireEvent, screen } from "@testing-library/react";
import Verification from "../Verification";
import { act } from "react-dom/test-utils";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";

jest.mock("axios");

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));


describe("<Verification />", () => {
  it("should display error message when submitting an invalid OTP", () => {
    const navigateMock = jest.fn();
    const useNavigateMock = jest.fn(() => navigateMock);

    (useNavigate as jest.Mock).mockImplementation(() => navigateMock);
    jest.spyOn(require("react-router-dom"), "useNavigate").mockImplementation(useNavigateMock);
    render(
      <Router>
        <Verification />
      </Router>
    );

    // Enter an invalid OTP with length less than 4
    const otpInput1 = screen.getByLabelText("Please enter OTP character 1");
    const otpInput2 = screen.getByLabelText("Please enter OTP character 2");
    const otpInput3 = screen.getByLabelText("Please enter OTP character 3");
    const otpInput4 = screen.getByLabelText("Please enter OTP character 4");

    fireEvent.change(otpInput1, { target: { value: "1" } });
    fireEvent.change(otpInput2, { target: { value: "2" } });
    fireEvent.change(otpInput3, { target: { value: "3" } });
    fireEvent.change(otpInput4, { target: { value: "" } });

    // Click on the Continue button
    const continueButton = screen.getByRole("button", { name: "Continue" });
    fireEvent.click(continueButton);

    // Check if the error message is displayed
    const errorMessage = screen.getByText("Please enter a valid OTP");
    expect(errorMessage).toBeInTheDocument();
  });

  it("should navigate to success page when submitting a valid OTP", async () => {
    const navigateMock = jest.fn();
    const useNavigateMock = jest.fn(() => navigateMock);

    (useNavigate as jest.Mock).mockImplementation(() => navigateMock);
    jest.spyOn(require("react-router-dom"), "useNavigate").mockImplementation(useNavigateMock);

    render(
      <Router>
        <Verification />
      </Router>
    );

    // Enter a valid OTP with length 4
    const otpInput1 = screen.getByLabelText("Please enter OTP character 1");
    const otpInput2 = screen.getByLabelText("Please enter OTP character 2");
    const otpInput3 = screen.getByLabelText("Please enter OTP character 3");
    const otpInput4 = screen.getByLabelText("Please enter OTP character 4");

    fireEvent.change(otpInput1, { target: { value: "4" } });
    fireEvent.change(otpInput2, { target: { value: "2" } });
    fireEvent.change(otpInput3, { target: { value: "3" } });
    fireEvent.change(otpInput4, { target: { value: "4" } });

    const continueButton = screen.getByRole("button", { name: "Continue" });
    fireEvent.click(continueButton);

    // Navigating to the /success
    expect(useNavigateMock).toHaveBeenCalled();
    expect(navigateMock).toHaveBeenCalledWith("/success");

  });
});
