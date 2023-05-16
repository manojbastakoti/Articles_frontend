import  { useState } from "react";
import axios from 'axios';

 const BASE_URL="http://localhost:8000/user/add";
const Register = () => {
  const [input, setinput] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, seterror] = useState(null);


  const userRegister =(e) => {
    e.preventDefault();
    
    for (const key in input) {
      if(input[key]==="")
      seterror("All fields are required!");
      return false;
      
  
    }
    console.log(error)
    const response= axios({
      method: 'post',
      url:BASE_URL,
      data:input,
      
    });
    console.log(response);
    
  };
  return (
    <form className="pt-10 max-w-sm mx-auto" onSubmit={userRegister}>
      <h1 className="text-3xl font-bold mb-4 text-center dark:text-white">
        Register
      </h1>
      <input
        className="block w-[100%] px-3 py-3 rounded-md outline-none mb-3"
        type="text"
        name="name"
        placeholder="Full Name"
        value={input.name}
        onChange={(e) =>setinput((prev) => ({
          name:e.target.value,
          email:prev.value,
          password:prev.value,
        }))
      }
      />
      <input
        className="block w-[100%] px-3 py-3 rounded-md outline-none mb-3"
        type="text"
        name="email"
        placeholder="Email"
        value={input.email}
        onChange={(e) =>setinput((prev) => ({
          name:prev.value,
          email:e.target.value,
          password:prev.value,
        }))}
      />
      <input
        className="block w-[100%] px-3 py-3 rounded-md outline-none mb-3"
        type="text"
        name="password"
        placeholder="Password"
        value={input.password}
        onChange={(e) =>setinput((prev) => ({
          name:prev.value,
          email:prev.value,
          password:e.target.value,
        }))}
      />
      <div className="error-box">
        <p className="text-red-500 font-semibold text-sm">
          {error?error:""}
        </p>
      </div>
      <div className="grid place-items-center">
        <button
          type="submit"
          className="block w-[100%] mt-3 px-3 py-3 rounded-md bg-[#99a7bd] hover:bg-[#5ea4f3] hover:font-semibold"
        >
          Register
        </button>
      </div>
    </form>
  );
};

export default Register;
