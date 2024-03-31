import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../Store/authSlice";
import authService from "../Appwrite/auth";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const login = async (data) => {
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        navigate("/");
        setTimeout(() => {
          location.reload();
        }, 1000);
      }
      toast.success("Successfully logged in", {
        style: {
          borderRadius: "30px",
        },
      });
    } catch (error) {
      toast.error(error.message, {
        style: {
          borderRadius: "10px",
        },
      });
    }
  };

  return (
    <div className="flex items-center justify-center w-full my-10">
      <div className="mx-auto w-full max-w-lg bg-gray-800 rounded-xl px-6 py-10 sm:p-10 border border-black/10">
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-center text-white text-2xl font-bold leading-tight">
          Sign in to your account
        </h2>
        <p className="mt-2 text-center text-base text-gray-100">
          Don't have any account? &nbsp;
          <Link
            to="/signup"
            className="font-medium text-cyan-300 text-primary transition-all duration-200 hover:underline"
          >
            Sign Up
          </Link>
        </p>
        <form onSubmit={handleSubmit(login)} className="mt-8">
          <div className="space-y-5 text-gray-100">
            <Input
              label="Email: "
              placeholder="Enter your email"
              className="bg-gray-700 outline-none border-none focus:bg-gray-600 text-white"
              type="email"
              def="guest@gmail.com"
              {...register("email", {
                required: true,
                validate: {
                  matchPatern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <Input
              label="Password: "
              type="password"
              def="Gue$t123"
              placeholder="Enter your password"
              className="bg-gray-700 outline-none border-none focus:bg-gray-600 text-white"
              {...register("password", {
                required: true,
              })}
            />
            <Button type="submit" className="w-full ">
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
