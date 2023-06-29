import { render, fireEvent, screen, waitFor } from "@testing-library/react";
import Login from "./Login";
import { BrowserRouter as Router, useNavigate } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import { act } from "react-dom/test-utils";

jest.mock("axios");

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("<Login />", () => {

  it("should render the login form correctly", () => {
    render(
      <Router>
        <Login />
      </Router>
    );

    expect(screen.getByLabelText("User Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Password")).toBeInTheDocument();
    expect(screen.getByText("Remember for 30 days")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Sign in" })).toBeInTheDocument();
    expect(screen.getByText("Forget your Password?")).toBeInTheDocument();
  });

  it("should allow the user to submit the form and navigate to the dashboard", async () => {
    render(
      <Router>
        <Login />
      </Router>
    );

    // Fill the form
    fireEvent.change(screen.getByLabelText("User Name"), {
      target: { value: "rk001" },
    });
    fireEvent.change(screen.getByLabelText("Password"), {
      target: { value: "rajesh1234" },
    });

    // Mock the axios.post method
    const mockAxiosPost = axios.post as jest.MockedFunction<typeof axios.post>;
    mockAxiosPost.mockResolvedValueOnce({
      data: {
        role: "teacher",
      },
    } as AxiosResponse);

    // Sign in button
    await act(async () => {
      fireEvent.click(screen.getByText("Sign in"));
    });
  });

  it("should show error message if username or password is invalid", () => {
    render(
      <Router>
        <Login />
      </Router>
    )

    const mockAxiosPost = axios.post as jest.MockedFunction<typeof axios.post>;
    mockAxiosPost.mockRejectedValueOnce(new Error("Invalid username or password"));

    fireEvent.click(screen.getByText("Sign in"));

    expect(screen.queryByText("Please enter a valid user name")).toBeNull();
    expect(screen.queryByText("Please enter a valid password")).toBeNull();
    expect(screen.queryByText("Invalid username or password")).toBeNull();

  })

  it("should navigate to the teacher role if the role received as teacher", async () => {
    const navigateMock = jest.fn();

    (useNavigate as jest.Mock).mockImplementation(() => navigateMock);

    render(
      <Router>
        <Login />
      </Router>
    )

    //Navigating to the teacher dashboard
    const mockAxiosPost = axios.post as jest.MockedFunction<typeof axios.post>;
    mockAxiosPost.mockResolvedValueOnce({ data: { role: "teacher" } });

    fireEvent.click(screen.getByText("Sign in"));
    expect(navigateMock).toHaveBeenCalledWith("/teacher_dashboard");
  });

  it("should navigate to the student dashboard if the role received as student", async () => {
    const navigateMock = jest.fn();
    const useNavigateMock = jest.fn(() => navigateMock);
  
    jest.spyOn(require("react-router-dom"), "useNavigate").mockImplementation(useNavigateMock);
  
    render(
      <Router>
        <Login />
      </Router>
    );
  
    const mockAxiosPost = axios.post as jest.MockedFunction<typeof axios.post>;
    mockAxiosPost.mockResolvedValueOnce({ data: { role: "student" } });
  
    // Submit the form
    await act(async () => {
      fireEvent.click(screen.getByText("Sign in"));
    });
  
    expect(useNavigateMock).toHaveBeenCalled(); 
    expect(navigateMock).toHaveBeenCalledWith("/student_dashboard");
  });
});


