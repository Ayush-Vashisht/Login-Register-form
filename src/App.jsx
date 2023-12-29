import "@dotlottie/player-component";
import IndexPage from "./IndexPage";
import { Route, Routes } from "react-router-dom";
import axios from "axios";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";

axios.defaults.baseURL="http://localhost:3000/";
axios.defaults.withCredentials=true;

function App() {
  return (
    <>
      <Routes>
        <Route>
          <Route path="/" element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
