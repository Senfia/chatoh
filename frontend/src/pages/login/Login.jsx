import React from "react";

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md"></div>
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
          <label className="label">
            <span className="text-base label-text">Password</span>
          </label>
          <input
            type="password"
            className="w-full input input-bordered h-10"
          ></input>
          <a
            href="#"
            className="text-sm hover:underline hover:text-accent mt-2 inline-block text-left"
          >
            Don't have an account?
          </a>

          <div className="btn btn-block btn-sm mt-4 bg-primary text-base-100 hover:bg-accent">
            Login
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
