import React, { useState } from "react";

export default function Login() {
  // use for manage a login and create accout page
  const [state, setstate] = useState("Sign Up");

  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const onsubmit = async (event) => {
    event.preventDefault();
  }; 

  console.log(name)

  return (
    <form className="min-h-[80vh]  flex items-center justify-center" action="">
      <div className="flex flex-col gap-3 m-autp items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-2xl font-semibold">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </p>
        <p>
          Please {state === "Sign Up" ? "sign up" : "login"} to book appointment
        </p>

        <div className="w-full ">
          <p>Full Name</p>
          <input
            placeholder="Enter Name"
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="text"
            onChange={(e) => setname(e.target.value)}
            value={name}
          />
        </div>
        <div className="w-full ">
          <p>Email</p>
          <input
            placeholder="Enter Email"
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="email"
            onChange={(e) => setemail(e.target.value)}
            value={email}
          />
        </div>
        <div className="w-full ">
          <p>Password</p>
          <input
            placeholder="Enter Password"
            className="border border-zinc-300 rounded w-full p-2 mt-1"
            type="password"
            onChange={(e) => setpassword(e.target.value)}
            value={password}
          />
        </div>
        <button className="bg-[#5f6FFF] text-white w-full py-2 rounded-md text-base">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>

        {state === "Sign Up" ? (
          <p>
            Already have an account?{" "}
            <span
              onClick={() => setstate("Login")}
              className="text-[#5f6fff] underline cursor-pointer"
            >
              Loin here
            </span>
          </p>
        ) : (
          <p>
            Create an new account?{" "}
            <span
              onClick={() => setstate("Sign Up")}
              className="text-[#5f6fff] underline cursor-pointer"
            >
              click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
}
