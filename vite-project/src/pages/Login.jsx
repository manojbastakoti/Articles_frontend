import axios from "axios";
import  { useState } from "react";
import { useNavigate } from "react-router-dom";

const BASE_URL = "http://localhost:8000/user";
const Login = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const loginUser = async (e) => {
    e.preventDefault();

    for (const key in input) {
      if (input[key] === "") {
        setError("All fields are required!");
        return false;
      }
    }
    const response = await axios({
      method: "post",
      url: BASE_URL + "/login",
      data: input,
      withCredentials:true,
    });
    // console.log(response);

    const data = response.data;
    if (!data.success) {
      setError(data.message);
      return false;
    }
    navigate("/");
  };

  return (
    <form className="pt-10 max-w-sm mx-auto" onSubmit={loginUser}>
      <h1 className="text-3xl font-bold mb-4 text-center dark:text-white">
        Login
      </h1>
      <input
        className="block w-[100%] px-3 py-3 rounded-md outline-none mb-3"
        name="email"
        type="text"
        placeholder="Email"
        value={input.email}
        onChange={(e) =>
          setInput((prev) => ({
            email: e.target.value,
            password: prev.password,
          }))
        }
      />
      <input
        className="block w-[100%] px-3 py-3 rounded-md outline-none mb-3"
        name="password"
        type="text"
        placeholder="Password"
        value={input.password}
        onChange={(e) =>
          setInput((prev) => ({
            email: prev.email,
            password:e.target.value,
          }))
        }
      />
      <div className="error-box">
        <p className="text-red-500 font-semibold text-sm">
          {error ? error : ""}
        </p>
      </div>
      <div className="grid place-items-center">
        <button
          type="submit"
          className="block w-[100%] mt-3 px-3 py-3 rounded-md bg-[#99a7bd] hover:bg-[#5ea4f3] hover:font-semibold"
        >
          Login
        </button>
      </div>
    </form>
  );
};

export default Login;
