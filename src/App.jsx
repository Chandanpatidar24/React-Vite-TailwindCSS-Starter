import { useState } from "react";

function App() {
  const [showConfetti, setShowConfetti] = useState(false);

  const handleCelebrate = () => {
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000); // hide confetti after 3s
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 via-white to-purple-200 px-4 relative overflow-hidden">
      {/* Confetti Animation */}
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none animate-pulse z-10">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="w-3 h-3 rounded-full bg-pink-400 absolute animate-bounce"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 1}s`,
                animationDuration: `${1 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>
      )}

      <div className="bg-white bg-opacity-80 backdrop-blur-md shadow-2xl rounded-2xl p-10 w-full max-w-2xl text-center z-20">
        <h1 className="text-5xl font-extrabold text-blue-600 mb-8">
          🔥 Everything is Working!
        </h1>

        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-3 text-left">
          <a
            href="https://vitejs.dev"
            target="_blank"
            className="p-4 bg-gradient-to-r from-indigo-100 to-indigo-200 hover:from-indigo-200 hover:to-indigo-300 rounded-lg shadow-md transition-all"
          >
            <h2 className="text-xl font-semibold text-indigo-800">✅ Vite</h2>
            <p className="text-sm text-indigo-700">Fast build tool for modern web apps.</p>
          </a>

          <a
            href="https://reactjs.org"
            target="_blank"
            className="p-4 bg-gradient-to-r from-blue-100 to-blue-200 hover:from-blue-200 hover:to-blue-300 rounded-lg shadow-md transition-all"
          >
            <h2 className="text-xl font-semibold text-blue-800">✅ React</h2>
            <p className="text-sm text-blue-700">A library for building UIs.</p>
          </a>

          <a
            href="https://tailwindcss.com"
            target="_blank"
            className="p-4 bg-gradient-to-r from-green-100 to-green-200 hover:from-green-200 hover:to-green-300 rounded-lg shadow-md transition-all"
          >
            <h2 className="text-xl font-semibold text-green-800">✅ Tailwind CSS</h2>
            <p className="text-sm text-green-700">Utility-first CSS framework.</p>
          </a>
        </div>

        <button
          onClick={handleCelebrate}
          className="mt-10 px-6 py-3 bg-blue-600 hover:bg-pink-600 text-white font-bold rounded-lg shadow-lg transition-all duration-300"
        >
          🎉 Celebrate!
        </button>
      </div>
    </div>
  );
}

export default App;
