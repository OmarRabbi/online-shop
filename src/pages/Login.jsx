import React, { useState } from "react";

export default function Login() {
  
  return (
    <div className="max-w-sm h-[80%] mx-auto my-12">
      <div className="border-2 p-6">
      <h1 className="text-2xl font-medium my-6">Sign in</h1>
      <input
        type="text"
        placeholder="Enter your phone number"
        className="border p-2 mb-4 w-full outline-none"
      />
      <input
        type="password"
        placeholder="Enter your password"
        className="border p-2 mb-4 w-full outline-none"
      />
      <button
        className="bg-red-500 w-full mx-auto rounded-md text-white px-4 py-2"
        type="button"
      >
        Sign in
      </button>
    </div>
    </div>
  );
}
