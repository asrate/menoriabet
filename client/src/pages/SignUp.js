import React from "react";
import { Link } from "react-router-dom";

function SignUP() {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg "
          id="username"
        />
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg "
          id="email"
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg "
          id="password"
        />
        <button className="bg-gray-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80 ">
          Sign Up
        </button>
      </form>
      <div>
        <p>
          have an account?
          <Link to={"/signin"}>
            <span className="text-blue-700"> Sign In</span>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default SignUP;