"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();



  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);

      const email = formData.get('email');
      const password = formData.get('password');
      console.log(email)
      console.log(password)

      const response = await fetch(`api/register`, {
        method: 'POST',
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          email,
          password
        })
      });

      response.status === 201 && router.push('/');


    } catch (e) {
      console.error(e.message)
    }
  }



  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="bg-[#212121] p-8 rounded shadow-md w-96">
        <h1 className="text-4xl text-center font-semibold mb-8">Register</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            id="email" className="w-full border border-gray-300  rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400"
            placeholder="Email"
            required
          />
          <input
            type="password"
            name="password"
            id="password"
            className="w-full border border-gray-300  rounded px-3 py-2 mb-4 focus:outline-none focus:border-blue-400"
            placeholder="Password"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            {" "}
            Register
          </button>
          <p className="text-red-600 text-[16px] mb-4">{error && error}</p>
        </form>
        <div className="text-center text-gray-500 mt-4">- OR -</div>
        <Link
          className="block text-center text-blue-500 hover:underline mt-2"
          href="/login"
        >
          Login with an existing account
        </Link>
      </div>
    </div>
  )

};

