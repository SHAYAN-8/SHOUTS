import React from "react";
import authService from "../Appwrite/auth.js";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../Store/authSlice.js";
import { Button, Input, Logo } from "./index.js";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const create = async (data) => {
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login(userData));
        navigate("/");
        setTimeout(() => {
          location.reload();
        }, 1000);
      }
      toast.success("Successfully signed up", {
        style: {
          borderRadius: "30px",
        },
      });
    } catch (error) {
      toast.error(error.message || register.message, {
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
          Sign up to create account
        </h2>
        <p className="mt-2 text-center text-base text-gray-100">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary text-cyan-300 transition-all duration-200 hover:underline"
          >
            Login
          </Link>
        </p>
        {errors.password && (
          <p className="text-red-500 text-center py-2">
            {errors.password.message}
          </p>
        )}
        <form onSubmit={handleSubmit(create)}>
          <div className="space-y-5 text-gray-100">
            <Input
              label="Full Name: "
              placeholder="Enter your full name"
              className="bg-gray-700 outline-none border-none focus:bg-gray-600 text-white"
              {...register("name", {
                required: true,
              })}
            />
            <Input
              label="Email: "
              placeholder="Enter your email"
              className="bg-gray-700 outline-none border-none focus:bg-gray-600 text-white"
              type="email"
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
              placeholder="Enter your password"
              className="bg-gray-700 outline-none border-none focus:bg-gray-600 text-white"
              {...register("password", {
                required: true,
                pattern: {
                  value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
                  message:
                    "Password must contain 8+ chars, lowercase, uppercase, number",
                },
              })}
            />

            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
