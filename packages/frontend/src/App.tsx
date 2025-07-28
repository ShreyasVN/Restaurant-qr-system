// React 18 with new JSX transform doesn't require explicit React import

function App() {
  const handleClick = () => {
    console.log('Button clicked!')
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-blue-600 to-teal-500 flex items-center justify-center p-8">
      <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-8 max-w-md w-full text-white text-center shadow-lg">
        <h1 className="text-4xl font-bold mb-4 text-white">
          Restaurant QR System
        </h1>
        
        <p className="text-lg mb-8 text-white/90">
          Modern React 18 + Vite + TypeScript mono-repo with glassmorphism design and premium animations.
        </p>
        
        <button
          className="bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 rounded-lg px-6 py-3 text-white font-semibold transition-all duration-200"
          onClick={handleClick}
        >
          Get Started
        </button>
        
        <div className="mt-8 text-sm text-white/70">
          <p>✨ Framer Motion + React Spring</p>
          <p>🎨 Tailwind CSS + twin.macro</p>
          <p>⚡ Vite + TypeScript</p>
          <p>🧪 Vitest Testing</p>
        </div>
      </div>
    </div>
  )
}

export default App
