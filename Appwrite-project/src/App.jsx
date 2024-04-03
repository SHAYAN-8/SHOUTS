import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import authService from "./Appwrite/auth";
import { login, logout } from "./Store/authSlice";
import { Header, Footer } from "./components/index";
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      ?.getCurrentUser()
      .then((userData) => {
        if (userData) {
          dispatch(login({ userData }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <>
      <div>
        <Toaster />
      </div>
      <div className="min-h-screen flex flex-wrap content-between ">
        <div className="w-full block">
          <Header />
          <main className="min-h-96 flex items-center justify-center bg-white">
            <Outlet />
          </main>
          <Footer />
        </div>
      </div>
    </>
  ) : null;
};

export default App;
