import React from "react";

import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const LoginForm = () => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const submitFormHandler = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(submitFormHandler)}
      method="post"
      className="flex flex-col w-full mt-2 md:w-6/12"
    >
      <div className="flex flex-col relative">
        <label htmlFor="username" className="mb-2">
          Username
        </label>
        <input
          {...register("username", {
            required: "The username field is required",
            minLength: {
              value: 3,
              message: "The username must be at least 3 characters.",
            },
          })}
          className={`px-4 py-4 rounded-lg border ${
            errors.username && "border-red-600"
          } mb-1 placeholder-dark`}
          type="text"
          name="username"
          placeholder="Enter unique username or email"
        />
      </div>
      <span className="text-sm text-red-600 flex mb-2 mt-1">
        {errors.username && (
          <img
            className="mr-1 w-5 h-5"
            src={require("../../assets/img/validation/error-warning-fill.png")}
            alt="error"
          />
        )}
        {errors.username?.message}
      </span>

      <div className="flex flex-col relative">
        <label htmlFor="password" className="mb-2">
          Password
        </label>
        <input
          {...register("password", {
            required: "The password field is required",
            minLength: {
              value: 3,
              message: "The password must be at least 3 characters.",
            },
          })}
          className={`px-4 py-4 rounded-lg border ${
            errors.password ? "border-red-600" : "border-gray-200"
          } mb-1 placeholder-dark`}
          type="password"
          name="password"
          id="password"
          placeholder="Fill in password"
        />
        <span className="text-sm text-red-600 flex mb-2 mt-1">
          {errors.password && (
            <img
              className="mr-1 w-5 h-5"
              src={require("../../assets/img/validation/error-warning-fill.png")}
              alt="error"
            />
          )}
          {errors.password?.message}
        </span>
      </div>

      <div className="flex justify-between items-center mt-2">
        <div className="flex items-center gap-1">
          <input
            type="checkbox"
            id="remember"
            name="remember"
            className="border border-gray-200 text-success transition duration-100 ease-in rounded-4 form-checkbox"
          />
          <label className="ml-1" htmlFor="remember">
            Remember this device
          </label>
        </div>
        <div>
          <a className="hover:underline text-link" href="#forgotpwd">
            Forgot password?
          </a>
        </div>
      </div>

      <div>
        <button
          type="submit"
          className="py-4 transition duration-150 ease-in text-white font-semibold
             uppercase hover:bg-hover-success bg-success my-5 w-full rounded-md"
        >
          Log In
        </button>
      </div>

      <div className="flex items-center justify-center space-x-2">
        <p className="text-dark">Don't have an account?</p>
        <Link to="/register" className="font-semibold hover:underline">
          Sign Up for free
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
