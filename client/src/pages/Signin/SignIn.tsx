import { Bug } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import API_URL from "../../config";
import toast, { Toaster } from "react-hot-toast";

export default function SignIn() {
  const navigate = useNavigate();
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const OnSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    setIsLoading(true);
    e.preventDefault();

    try {
      const data = await axios.post(`${API_URL}/signin`, {
        email,
        password,
      });
      console.log(data.data);
      localStorage.setItem("token", data.data.token);
      setIsLoading(false);

      toast.success("Signd In  Successfully");
      navigate("/codereview");
    } catch (error: any) {
      setIsLoading(false);

      if (error?.response?.data?.message) {
        toast.error(error.response.data.message); // Display message from server
        console.log(error);
      } else {
        toast.error("An unexpected error occurred");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <Toaster />
      {/* Navbar */}
      <nav className="flex justify-between items-center bg-gray-950 p-6 shadow-lg border-b border-gray-800">
        <div
          onClick={() => navigate("/")}
          className="flex gap-3 items-center cursor-pointer"
        >
          <Bug size={50} className="text-violet-500 animate-spin-slow" />
          <h1 className="font-bold text-3xl text-violet-400">BugBugGo</h1>
        </div>
      </nav>

      {/* Sign In Form */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md bg-gray-800 rounded-xl p-8 shadow-xl border border-gray-700 animate-fade-up">
          <h2 className="text-3xl font-bold text-violet-400 mb-6 text-center">
            Welcome Back
          </h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Email Address
              </label>
              <input
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                type="email"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300"
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                Password
              </label>
              <input
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type="password"
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-transparent transition-all duration-300"
                placeholder="Enter your password"
              />
            </div>
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-600 text-violet-500 focus:ring-violet-500 bg-gray-700"
                />
                <label className="ml-2 block text-sm text-gray-300">
                  Remember me
                </label>
              </div>
              <a
                href="#"
                className="text-sm text-violet-400 hover:text-violet-300 transition-colors"
              >
                Forgot password?
              </a>
            </div>
            <button
              disabled={isLoading}
              onClick={(e) => {
                OnSubmit(e);
              }}
              type="submit"
              className="w-full bg-violet-600 hover:bg-violet-500 text-white flex justify-center font-semibold py-3 rounded-lg transition-all duration-300 shadow-lg"
            >
              {isLoading ? (
                <div className="w-5  h-5 animate-spin   border-t-transparent border-4  rounded-full"></div>
              ) : (
                "SignIn"
              )}
            </button>
          </form>
          <p className="mt-6 text-center text-gray-400">
            Don't have an account?{" "}
            <span
              onClick={() => navigate("/signup")}
              className="text-violet-400 hover:text-violet-300 cursor-pointer transition-colors"
            >
              Sign up
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
    </div>
  );
}
