"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff } from "lucide-react";

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "http://localhost:5000/api/auth/register",
        form
      );
      const { token, user } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      router.push("/dashboard");
    } catch (err: unknown) {
      let msg = "Registration failed";
      if (typeof err === "object" && err !== null && "response" in err) {
        const response = (
          err as { response?: { data?: { msg?: string; message?: string } } }
        ).response;
        msg = response?.data?.msg || response?.data?.message || msg;
      }
      setError(msg);
    }
  };

  return (
    <div className="min-h-screen flex items-center text-black justify-center bg-[#1e004d] px-4">
      <div className="flex flex-col md:flex-row w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Left Side Image */}
        <div className="hidden md:flex md:w-1/2 bg-[#4B0082] items-center justify-center ">
          <Image
            src="https://plus.unsplash.com/premium_photo-1681487916420-8f50a06eb60e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Register Illustration"
            width={750}
            height={750}
            className="object-cover w-full h-full"
          />
        </div>
        {/* Right Side Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold mb-6 text-center text-purple-800">
            Create Your Account
          </h2>
          {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
          <form onSubmit={handleRegister} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full p-3 border border-gray-300 rounded-lg"
              value={form.name}
              onChange={handleChange}
              required
              autoComplete="name"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-lg"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Password"
                className="w-full p-3 border border-gray-300 rounded-lg pr-12"
                value={form.password}
                onChange={handleChange}
                required
                autoComplete="new-password"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                tabIndex={-1}
                onClick={() => setShowPassword((v) => !v)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
              </button>
            </div>
            <button
              type="submit"
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-semibold py-3 px-8 rounded-lg transition disabled:opacity-60"
            >
              Register
            </button>
          </form>
          <div className="mt-6 text-center text-sm">
            Already have an account?{" "}
            <Link
              href="/login"
              className="text-yellow-500 hover:underline font-semibold"
            >
              Login
            </Link>
          </div>
          <div className="mt-2 text-center text-sm">
            <Link
              href="/admin-login"
              className="text-[#4B0082] hover:underline font-semibold"
            >
              Admin Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
