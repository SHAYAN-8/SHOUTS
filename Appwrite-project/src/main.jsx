import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./Store/store.js";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./index.css";
import {
  App,
  AuthLayout,
  Home,
  AllPosts,
  AddPost,
  EditPost,
  SignUp,
  Post,
  NotFound,
  PrivacyPolicy,
  Login,
  MyBlogs,
} from "./Pages/index.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route
          path="/login"
          element={
            <AuthLayout authentication={false}>
              <Login />
            </AuthLayout>
          }
        />
        <Route
          path="/signup"
          element={
            <AuthLayout authentication={false}>
              <SignUp />
            </AuthLayout>
          }
        />
        <Route
          path="/all-posts"
          element={
            <AuthLayout authentication>
              <AllPosts />
            </AuthLayout>
          }
        />
        <Route
          path="/add-post"
          element={
            <AuthLayout authentication>
              <AddPost />
            </AuthLayout>
          }
        />
        <Route
          path="/my-blogs"
          element={
            <AuthLayout authentication>
              <MyBlogs />
            </AuthLayout>
          }
        />
        <Route
          path="/edit-post/:slug"
          element={
            <AuthLayout authentication>
              <EditPost />
            </AuthLayout>
          }
        />
        <Route path="/post/:slug" element={<Post />} />
      </Route>
      <Route path="/*" element={<NotFound />} />
    </>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

//  in future , save, comment, category, profile, infinite scroll
