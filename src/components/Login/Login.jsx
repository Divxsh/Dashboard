import React from "react";
import Icon from "../Icon/Icon";
import Router from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";

const Login = () => {
  const { data: session } = useSession();

  const onSubmitHandler = (e) => {
    e.preventDefault();
    Router.push("/");
  };

  if (session) Router.push("/");

  return (
    <div className=" flex h-screen min-h-screen w-screen">
      {/* Left Side */}
      <div className=" hidden items-center justify-center bg-black md:flex md:w-2/5">
        <h1 className="font-montserrat text-7xl font-bold text-white">
          Board.
        </h1>
      </div>

      {/* Right Side */}
      <div className="flex w-full items-center justify-center bg-[#F5F5F5] md:w-3/5">
        <div className="flex flex-col p-5">
          <h2 className="font-montserrat text-4xl font-bold">Sign In</h2>
          <p className="mt-2 font-lato">Sign in to your account</p>

          {/* Buttons */}
          <div className="my-6 flex w-full flex-1 flex-wrap gap-6 md:w-auto">
            <button
              className="flex w-full items-center gap-x-2.5 rounded-[10px] bg-white px-5  py-2 md:w-auto"
              onClick={signIn}
            >
              <Icon name={"google"} size={"14px"} />
              <iv className="w-full text-center font-montserrat text-xs text-[#858585] ">
                Sign in with Google
              </iv>
            </button>
            <button className="flex w-full items-center gap-x-2.5 rounded-[10px] bg-white px-5   py-2 md:w-auto">
              <Icon name={"apple"} size={"14px"} />
              <div className="w-full text-center font-montserrat text-xs text-[#858585]">
                Sign in with Apple
              </div>
            </button>
          </div>

          {/* Login Card */}
          <div className="flex flex-col rounded-2xl bg-white p-4 md:p-7">
            <form
              action=""
              className="flex flex-col gap-y-5 "
              onSubmit={onSubmitHandler}
            >
              <div className="flex flex-col gap-y-2.5 ">
                <label htmlFor="email" className="font-lato">
                  Email address
                </label>
                <input
                  type="text"
                  name="email"
                  id="eamil"
                  className="rounded-[10px] bg-[#F5F5F5] py-2 pl-4 font-lato transition-[background] focus:bg-[#EAEAEA] focus:outline-0"
                />
              </div>
              <div className="flex flex-col gap-y-2.5 ">
                <label htmlFor="password" className="font-lato">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="rounded-[10px] bg-[#F5F5F5] py-2 pl-4 font-lato focus:bg-[#EAEAEA] focus:outline-0 focus:transition-[background]"
                />
              </div>
              <div className="font-lato text-[#346BD5] ">Forgot password?</div>
              <button
                type="submit"
                className="w-full rounded-[10px] bg-black py-2.5 font-montserrat text-sm font-bold text-white"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
