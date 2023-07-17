import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { MemoryRouter, useNavigate } from "react-router-dom";
import Login from "../Login";
// import { fetchData } from "../LoginApi/LoginAction";
// import { store, AppDispatch, RootState } from "../../../../app/store";

// jest.mock("../LoginApi/LoginAction", () => ({
//   fetchData: jest.fn(),
// }));

// jest.mock("react-router-dom", () => ({
//   ...jest.requireActual("react-router-dom"),
//   useNavigate: jest.fn(),
// }));

// describe("Login Component", () => {
//   let store: any;
//   let navigate: ReturnType<typeof useNavigate>

//   beforeEach(() => {
//     store = configureStore({
//       reducer: rootReducer,
//       preloadedState: {
//         data: {
//           role: "teacher",
//           isLoggedIn: false,
//         },
//       },
//     });
//     navigate = jest.fn();
//   });

//   it("renders the login form correctly", () => {
//     render(
//       <Provider store={store}>
//         <MemoryRouter>
//           <Login />
//         </MemoryRouter>
//       </Provider>
//     );

//     // Add assertions for the login form
//   });

//   it("submits the form with valid credentials", async () => {
//     const mockedResponse = { message: "Login successful" };
//     (fetch as jest.Mock).mockReturnValueOnce({ payload: mockedResponse });
//     store.dispatch({ type: "SET_USER_ROLE", payload: "teacher" });
//     store.dispatch({ type: "SET_USER_LOGGED", payload: true });

//     render(
//       <Provider store={store}>
//         <MemoryRouter>
//           <Login />
//         </MemoryRouter>
//       </Provider>
//     );

//     const usernameInput = screen.getByLabelText("User Name");
//     const passwordInput = screen.getByLabelText("Password");
//     fireEvent.change(usernameInput, { target: { value: "testuser" } });
//     fireEvent.change(passwordInput, { target: { value: "testpassword" } });

//     fireEvent.click(screen.getByRole("button", { name: "Sign in" }));

//     expect(fetchData).toHaveBeenCalledWith({
//       username: "testuser",
//       password: "testpassword",
//     });

//     await waitFor(() => {
//       expect(navigate).toHaveBeenCalledWith("/teacher_dashboard");
//     });
//   });

//   it("handles server-side errors correctly", async () => {
//     const errorMessage = "Invalid credentials";
//     const errorResponse = { message: errorMessage };
//     (fetch as jest.Mock).mockRejectedValueOnce({ response: { data: errorResponse } });

//     render(
//       <Provider store={store}>
//         <MemoryRouter>
//           <Login />
//         </MemoryRouter>
//       </Provider>
//     );

//     const usernameInput = screen.getByLabelText("User Name");
//     const passwordInput = screen.getByLabelText("Password");
//     fireEvent.change(usernameInput, { target: { value: "testuser" } });
//     fireEvent.change(passwordInput, { target: { value: "testpassword" } });

//     fireEvent.click(screen.getByRole("button", { name: "Sign in" }));

//     expect(fetchData).toHaveBeenCalledWith({
//       username: "testuser",
//       password: "testpassword",
//     });

//     await waitFor(() => {
//       expect(screen.getByText(errorMessage)).toBeInTheDocument();
//     });
//   });
// });
