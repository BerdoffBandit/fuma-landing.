import { motion } from 'motion/react';
import { Scan } from 'lucide-react';

export function HologramCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      className="relative w-full max-w-md mx-auto mt-16"
    >
      {/* Outer glow */}
      <div className="absolute inset-0 bg-[#43BFF1]/10 blur-3xl rounded-3xl" />
      
      {/* Main card */}
      <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8">
        {/* Scanning animation */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Scan className="w-5 h-5 text-[#43BFF1]" strokeWidth={1} />
            </motion.div>
            <span className="text-sm text-white/60">Scanning AI systems...</span>
          </div>
          <div className="w-2 h-2 bg-[#43BFF1] rounded-full animate-pulse" />
        </div>

        {/* Wireframe lines */}
        <div className="space-y-3 mb-6">
          {[100, 85, 70, 55].map((width, i) => (
            <motion.div
              key={i}
              initial={{ width: 0 }}
              animate={{ width: `${width}%` }}
              transition={{ duration: 1, delay: 0.7 + i * 0.1 }}
              className="h-px bg-gradient-to-r from-[#43BFF1]/40 to-transparent"
            />
          ))}
        </div>

        {/* Status indicators */}
        <div className="grid grid-cols-3 gap-4">
          {['ChatGPT', 'Claude', 'Gemini'].map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 + i * 0.2 }}
              className="text-center"
            >
              <div className="text-xs text-white/40 mb-1">{name}</div>
              <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 1.5, delay: 1.2 + i * 0.2 }}
                  className="h-full bg-[#43BFF1]/50"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Corner accents */}
        <div className="absolute top-4 left-4 w-8 h-8 border-t border-l border-[#43BFF1]/30" />
        <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-[#43BFF1]/30" />
        <div className="absolute bottom-4 left-4 w-8 h-8 border-b border-l border-[#43BFF1]/30" />
        <div className="absolute bottom-4 right-4 w-8 h-8 border-b border-r border-[#43BFF1]/30" />
      </div>
    </motion.div>
  );
}
