/* eslint-disable react/no-unescaped-entities */
import {Link } from "react-router-dom";
import "@dotlottie/player-component";
export default function IndexPage() {
    return(
        <div className="md:flex w-screen h-screen px-2 bg-black text-[#5c77d6ff] ">
        <div className="h-screen w-screen flex  md:w-2/4 relative ">
          <div className=" md:absolute md:bottom-0 ">
            <dotlottie-player
              src="https://lottie.host/ccb42cb0-3e01-4006-aa9e-98700998ab7e/E37Ek3PbzY.json"
              autoplay
              direction="1"
              speed={1}
              mode="normal"
              loop
            />
          </div>
        </div>
        <div className=" h-screen w-screen md:w-2/4 flex flex-col items-center justify-center md:pl-14 md:gap-2 bg-black">
          <div className="p-2 mb-6">
            <span className="text-7xl">HELLO👋🏻</span>
          </div>
          <div className="w-2/4 flex flex-col  justify-center ">
            <span className="text-2xl font-bold text-start">
              Don't have an account?
            </span>
            <span className="text-start text-[#c4c4c4ff]">
              Register to access all the features of our service.
            </span>
            <Link to={"/register"} className="border border-solid-black outline outline-2 mt-4 mb-2 text-2xl text-center font-semibold p-2  hover:text-[#fa5f5fff] hover:bg-white ">
              Register
            </Link>
          </div>
          <div className="pt-5">
            <span>---------------------------------</span>
          </div>
          <div className="w-2/4 flex flex-col  justify-center pt-5">
            <span className="text-2xl font-bold text-start">
              Already have an account?
            </span>
            <span className="text-[#c4c4c4ff]">Welcome back!</span>
            <Link to={"/login"} className="border border-solid-black outline outline-2 mt-4 mb-2 text-2xl text-center font-semibold p-2 hover:text-[#fa5f5fff] hover:bg-white">
              Login
            </Link>
          </div>
        </div>
      </div>
    );
}