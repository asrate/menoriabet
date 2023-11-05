import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function SignUP() {
  const [formdata, setFormData] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setFormData({
      ...formdata,
      [e.target.id]: e.target.value,
    });
  };
  console.log(formdata);
  const handleSubmit = async (e) => {
    try {
      setLoading(true);
      e.preventDefault();
      const res = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formdata),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setError(data.message);
        setLoading(false);
      }

      setLoading(false);
      setError(null);
      navigate("/signin");
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };
  // console.log(formdata);
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="username"
          className="border p-3 rounded-lg "
          id="username"
          onChange={handleChange}
        />
        <input
          type="email"
          placeholder="email"
          className="border p-3 rounded-lg "
          id="email"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="password"
          className="border p-3 rounded-lg "
          id="password"
          onChange={handleChange}
        />
        <button
          disabled={loading}
          className="bg-gray-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80 "
        >
          {loading ? "loading..." : "Sign Up"}
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
      {error && <p className="text-red-700">{error}</p>}
    </div>
  );
}

export default SignUP;
