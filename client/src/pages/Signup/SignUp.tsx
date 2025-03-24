import { Bug } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { toast, Toaster } from "react-hot-toast";

export default function SignUp() {
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmpassword] = useState("");

  const OnSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error("Passwords do not match."); 
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Navbar */}
      <Toaster />
      <nav className="flex justify-between items-center bg-gray-950 p-6 shadow-lg border-b border-gray-800">
        <div
          onClick={() => navigate("/")}
          className="flex gap-3 items-center cursor-pointer"
        >
          <Bug size={50} className="text-violet-500 animate-spin-slow" />
          <h1 className="font-bold text-3xl text-violet-400">BugBugGo</h1>
        </div>
      </nav>

      {/* Sign Up Form */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-gray-800 rounded-xl p-8 shadow-xl border border-gray-700 animate-fade-up">
          <h2 className="text-3xl font-bold text-violet-400 mb-6 text-center">
            Create Account
          </h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Username
              </label>
              <input
                type="email"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300"
                placeholder="Roe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                type="email"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300"
                placeholder="Roe@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <input
                value={password}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setPassword(e.target.value);
                }}
                type="password"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300"
                placeholder="Create a strong password"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Confirm Password
              </label>
              <input
                value={confirmPassword}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setConfirmpassword(e.target.value);
                }}
                type="password"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300"
                placeholder="Confirm your password"
              />
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                className="h-4 w-4 rounded border-gray-600 text-violet-500 focus:ring-violet-500 bg-gray-700"
              />
              <label className="ml-2 block text-sm text-gray-300">
                I agree to the{" "}
                <a href="#" className="text-violet-400 hover:text-violet-300">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#" className="text-violet-400 hover:text-violet-300">
                  Privacy Policy
                </a>
              </label>
            </div>
            <button
              type="submit"
              onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                OnSubmit(e);
              }}
              className="w-full bg-violet-600 hover:bg-violet-500 text-white font-semibold py-3 rounded-lg transition-all duration-300 shadow-lg"
            >
              Create Account
            </button>
          </form>
          <p className="mt-6 text-center text-gray-400">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/signin")}
              className="text-violet-400 hover:text-violet-300 cursor-pointer transition-colors"
            >
              Sign in
            </span>
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-950 p-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex gap-2 items-center">
            <Bug size={30} className="text-violet-500" />
            <span className="text-violet-400 font-semibold">
              BugBugGo © 2025
            </span>
          </div>
          <div className="flex gap-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-violet-400 transition-colors">
              About
            </a>
            <a href="#" className="hover:text-violet-400 transition-colors">
              Docs
            </a>
            <a href="#" className="hover:text-violet-400 transition-colors">
              Support
            </a>
          </div>
        </div>
      </footer>

      {/* Custom Animations */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        @keyframes fade-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-up {
          animation: fade-up 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
}
