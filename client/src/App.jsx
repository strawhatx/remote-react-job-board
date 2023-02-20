import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Index";
import Layout from "./components/Layout";
import Login from "./pages/login/Index";
import Register from "./pages/register/Index";
import ForgotPassword from "./pages/forgot-password/Index";
import UserProfile from "./pages/profile/Index";
import { ThemeProvider } from "react-bootstrap";
import Search from "./pages/search/Index";
import Comments from "./pages/comments/Index";

const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider
        breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
        minBreakpoint="xxs"
      >
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Layout children={<Home />} hasNav={true} hasFooter={false} />
            }
          />
          <Route
            exact
            path="/signup"
            element={
              <Layout
                children={<Register />}
                hasNav={false}
                hasFooter={false}
              />
            }
          />
          <Route
            exact
            path="/signin"
            element={
              <Layout children={<Login />} hasNav={false} hasFooter={false} />
            }
          />
          <Route
            exact
            path="/my-account"
            element={
              <Layout
                children={<UserProfile />}
                hasNav={true}
                hasFooter={false}
              />
            }
          />
          <Route
            exact
            path="/forgot-password"
            element={
              <Layout
                children={<ForgotPassword />}
                hasNav={false}
                hasFooter={false}
              />
            }
          />
          <Route
            exact
            path="/search"
            element={
              <Layout children={<Search />} hasNav={true} hasFooter={true} />
            }
          />
          <Route
            exact
            path="/comments/:postId"
            element={
              <Layout children={<Comments />} hasNav={true} hasFooter={true} />
            }
          />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
