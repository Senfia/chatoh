import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import useLogin from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(username, password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto ">
      <div className="w-full p-6 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
        <div className="flex items-center justify-center">
          <img
            className="w-8 h-8 inline-block"
            alt="Tailwind CSS Navbar component"
            src="../public/chatoh.svg"
          />
        </div>
        <h1 className="text-3-xl font-semibold text-center">
          Login <span className="text-primary">CHAT OH!</span>
        </h1>

        <form onSubmit={handleSubmit}>
          <div>
            <label className="label p-2">
              <span className="text-base label-text">Username</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className=" w-full input input-bordered h-10"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label className="label">
              <span className="text-base label-text">Password</span>
            </label>
            <input
              type="password"
              className="w-full input input-bordered h-10"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></input>
            <Link
              to="/signup"
              className="text-sm hover:underline hover:text-accent mt-2 inline-block text-left"
            >
              Don't have an account?
            </Link>
          </div>

          <div>
            <button
              className="btn btn-block btn-sm mt-4 bg-primary text-base-100 hover:bg-accent"
              disabled={loading}
            >
              {loading ? (
                <span className="loading loading-spinner "></span>
              ) : (
                "Login"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
