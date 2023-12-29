import "@dotlottie/player-component";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(false);
  async function userLogin(ev) {
    ev.preventDefault();
    try {
      await axios.post(
        "/auth/login",
        {
          email,
          password,
        },
        { withCredentials: true }
      );
      setUser(true);
      alert("login successful");
    } catch (err) {
      alert(err);
    }
  }
  return (
    <>
      {user ? (
        <div className="w-screen h-screen bg-black">
          <dotlottie-player
            src="https://lottie.host/9d54f6b9-babf-4c27-98a2-38c5edbf8684/yLjvVoUYRc.json"
            autoplay
            direction="1"
            speed={1}
            mode="normal"
            loop
          />
        </div>
      ) : (
        <div className="w-screen h-screen flex grow items-center justify-around p-2 bg-black">
          <div className="w-2/4 h-screen flex items-center">
            <form
              onSubmit={userLogin}
              className="mx-auto w-2/4 h-3/4 border border-solid-white px-2 py-5 bg-white flex flex-col justify-evenly "
            >
              <div className="text-4xl text-center font-semibold text-[#454c8cff]">
                Login
              </div>
              <div className="px-6 text-xs md:text-sm">
                <span className="text-[#6064d6ff]">EMAIL</span>
                <input
                  type="email"
                  placeholder="yourname@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="text-[#6064d6ff]">PASSWORD</span>
                <input
                  type="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="flex justify-end mt-4">
                  <button className="border border-[##7aa2ffff] px-2 py-1 font-semibold text-[#454c8cff] hover:bg-[#7aa2ffff] hover:text-white">
                    Sign in
                  </button>
                </div>
              </div>
              <div className="text-xs text-center">
                <span>Dont have an account yet? </span>
                <Link
                  to={"/register"}
                  className="text-[#454c8cff] hover:text-[#24d1baff]"
                >
                  Register
                </Link>
              </div>
            </form>
          </div>
          <div className="w-2/4">
            <dotlottie-player
              src="https://lottie.host/5d2cb210-4b83-4e6d-969b-1ab461856171/BuIxRDbeH6.json"
              autoplay
              direction="1"
              speed={1}
              mode="normal"
              loop
            />
          </div>
        </div>
      )}
    </>
  );
}
