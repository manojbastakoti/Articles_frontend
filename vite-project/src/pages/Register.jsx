import React from 'react'

const Register = () => {
  return (
    <form className='pt-10 max-w-sm mx-auto'>
      <h1 className='text-3xl font-bold mb-4 text-center dark:text-white'>Register</h1>
      <input  className="block w-[100%] px-3 py-3 rounded-md outline-none mb-3" type="text" placeholder="Full Name"/>
      <input  className="block w-[100%] px-3 py-3 rounded-md outline-none mb-3" type="text" placeholder="Email"/>
      <input  className="block w-[100%] px-3 py-3 rounded-md outline-none mb-3" type="text" placeholder="Password"/>
      <div className="error-box hidden">
        <p className='text-red-500 font-semibold text-sm'>All fields are required!</p>
      </div>
      <div className="grid place-items-center">

      <button className="block w-[100%] mt-3 px-3 py-3 rounded-md bg-[#99a7bd] hover:bg-[#5ea4f3] hover:font-semibold">Register</button>
      </div>
    </form>
  )
}

export default Register