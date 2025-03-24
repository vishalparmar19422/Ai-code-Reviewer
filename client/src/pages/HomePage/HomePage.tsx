import { Bot, Bug } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function HomePage() {
  const Navigate = useNavigate();
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Navbar */}
      <nav className="flex justify-between items-center bg-gray-950 p-6 shadow-lg border-b border-gray-800">
        <div className="flex gap-3 items-center">
          <Bug size={50} className="text-violet-500 animate-spin-slow" />
          <h1 className="font-bold text-3xl text-violet-400">BugBugGo</h1>
        </div>
        <div className="flex gap-4">
          <button
            onClick={() => Navigate("/signin")}
            className="bg-violet-600 hover:bg-violet-500 p-3 px-6 rounded-lg font-semibold text-white transition-all duration-300 shadow-md"
          >
            SignIn
          </button>
          <button
            onClick={() => Navigate("/signup")}
            className="bg-violet-600 hover:bg-violet-500 p-3 px-6 rounded-lg font-semibold text-white transition-all duration-300 shadow-md"
          >
            Signup
          </button>
        </div>
      </nav>

      {/* Intro Section */}
      <section className="py-20 px-6 text-center bg-gray-900 animate-fade-in">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-extrabold text-violet-400 mb-6 tracking-tight">
            Elevate Your Code with AI
          </h1>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed mb-10">
            BugBugGo harnesses cutting-edge AI to analyze your code—spotting
            errors and suggesting fixes faster than ever.
          </p>
          <div className="flex justify-center gap-6">
            <button className="bg-violet-600 hover:bg-violet-500 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg animate-bounce">
              Get Started
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 text-violet-400 font-semibold py-3 px-8 rounded-lg transition-all duration-300 shadow-md border border-gray-700 animate-bounce delay-100">
              Explore Features
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-bold text-violet-400 mb-10 text-center">
          Unleash Your Code’s Potential
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-800 animate-fade-up">
            <Bot size={40} className="text-violet-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">
              Instant Error Spotting
            </h3>
            <p className="text-gray-400">
              Our AI scans your code in real-time, catching bugs before they
              bite.
            </p>
          </div>
          <div className="bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-800 animate-fade-up delay-100">
            <Bug size={40} className="text-violet-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">
              Actionable Suggestions
            </h3>
            <p className="text-gray-400">
              Get practical fixes to improve your code quality instantly.
            </p>
          </div>
          <div className="bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-800 animate-fade-up delay-200">
            <Bot size={40} className="text-violet-500 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">
              Future-Proof Tips
            </h3>
            <p className="text-gray-400">
              Learn best practices to keep your code sharp and scalable.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-950 p-6 border-t border-gray-800 mt-auto">
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

      {/* Custom CSS for Slow Spin */}
      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .delay-100 {
          animation-delay: 0.1s;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </div>
  );
}
