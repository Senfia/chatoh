import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
      <div className="w-full p-6 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <h1 className="text-3-xl font-semibold text-center">
          Login <span className="text-primary">CHAT OH!</span>
        </h1>

        <form>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className=" w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              className="w-full input input-bordered h-10"
            ></input>
            <Link
              to="/signup"
              className="text-sm hover:underline hover:text-accent mt-2 inline-block text-left"
            >
              Don't have an account?
            </Link>
          </div>

          <div className="btn btn-block btn-sm mt-4 bg-primary text-base-100 hover:bg-accent">
            Login
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
