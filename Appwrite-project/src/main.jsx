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

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//     children: [
//       {
//         path: "/",
//         element: <Home />,
//       },
//       {
//         path: "/login",
//         element: (
//           <AuthLayout authentication={false}>
//             <Login />
//           </AuthLayout>
//         ),
//       },
//       {
//         path: "/signup",
//         element: (
//           <AuthLayout authentication={false}>
//             <SignUp />
//           </AuthLayout>
//         ),
//       },
//       {
//         path: "/all-posts",
//         element: (
//           <AuthLayout authentication>
//             {" "}
//             <AllPosts />
//           </AuthLayout>
//         ),
//       },
//       {
//         path: "/add-post",
//         element: (
//           <AuthLayout authentication>
//             {" "}
//             <AddPost />
//           </AuthLayout>
//         ),
//       },
//       {
//         path: "/edit-post/:slug",
//         element: (
//           <AuthLayout authentication>
//             {" "}
//             <EditPost />
//           </AuthLayout>
//         ),
//       },
//       {
//         path: "/post/:slug",
//         element: <Post />,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);

//  in future share, save, comment, likes, category, profile, infinite scroll
