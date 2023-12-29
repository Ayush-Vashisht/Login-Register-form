import "@dotlottie/player-component";
import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [user, setUser] = useState(false);
  const [password, setPassword] = useState("");
  async function userRegister(ev) {
    ev.preventDefault();
    try {
      await axios.post("/auth/register", {
        name,
        email,
        password,
      });
      setUser(true);
      alert("Registration succesful. Now you can log in");
    } catch (err) {
      alert(err);
    }
  }
  return (
    <>
      {user ? (
        <div className="w-screen h-screen ">
        
            <dotlottie-player
              src="https://lottie.host/be832255-9b39-4332-8cc1-247465ed5b28/7xaN9ALwwR.json"
              autoplay
              direction="1"
              speed={0.5}
              background="transparent"
              mode="normal"
              loop
            />
        </div>
      ) : (
        <div className="w-screen h-screen flex  grow items-center justify-around p-2 bg-black">
          <div className="w-2/4 h-screen flex items-center">
            <form
              onSubmit={userRegister}
              className="mx-auto w-2/4 h-3/4 border border-solid-white px-2 py-5 bg-white flex flex-col justify-evenly "
            >
              <div className="text-4xl text-center font-semibold text-[#454c8cff]">
                Register
              </div>
              <div className="px-6 text-xs md:text-sm">
                <span className="text-[#6064d6ff]">NAME</span>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
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
                  <button className="border border-[#454c8cff] px-2 py-1 font-semibold text-[#454c8cff] hover:bg-[#24d1baff] hover:text-white">
                    Sign up
                  </button>
                </div>
              </div>
              <div className="text-xs text-center">
                <span>Already a member? </span>
                <Link
                  to={"/login"}
                  className="text-[#454c8cff] hover:text-[#24d1baff]"
                >
                  Log in
                </Link>
              </div>
            </form>
          </div>
          <div className="w-2/4">
            <dotlottie-player
              src="https://lottie.host/561dd23e-ad7a-48d0-802c-6c7d439c54b1/xKJxOAtlyb.json"
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
