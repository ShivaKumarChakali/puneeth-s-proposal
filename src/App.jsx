import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'

function App() {
  const [noClicks, setNoClicks] = useState(0)
  const [showProposal, setShowProposal] = useState(true)
  const [showCelebration, setShowCelebration] = useState(false)

  const handleYesClick = () => {
    setShowProposal(false)
    setShowCelebration(true)
    
    // Trigger confetti animation
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    })
    
    // Additional confetti bursts
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      })
    }, 250)
    
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
      })
    }, 400)
  }

  const handleNoClick = () => {
    setNoClicks(prev => prev + 1)
  }

  const yesButtonSize = 1 + (noClicks * 0.2) // Increase size by 20% each time

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-pink-100 via-rose-100 to-pink-200 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated floating hearts background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-pink-300 text-2xl"
            initial={{
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 50,
              opacity: 0
            }}
            animate={{
              y: -100,
              opacity: [0, 1, 0],
              rotate: [0, 360]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "linear"
            }}
          >
            {['💖', '💕', '💗', '💓', '💝', '💞', '💟', '💜', '🌸', '🌺', '🌷', '🌹', '✨', '💫', '⭐', '🌟'][Math.floor(Math.random() * 16)]}
          </motion.div>
        ))}
      </div>
      
      {/* Sparkle effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute text-yellow-300 text-lg"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0,
              scale: 0
            }}
            animate={{
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
          >
            ✨
          </motion.div>
        ))}
      </div>
      <AnimatePresence mode="wait">
        {showProposal && (
          <motion.div
            key="proposal"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="text-center max-w-md mx-auto"
          >
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-pink-600 mb-8 drop-shadow-lg"
            >
              💕 Will you marry me? 💕
            </motion.h1>
            
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-2xl md:text-3xl text-pink-500 mb-8 font-semibold"
            >
              💖 Pretty please? 💖
            </motion.div>
            
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center"
              style={{ gap: `${Math.max(8, noClicks * 2)}rem` }}
            >
              <motion.button
                animate={{ scale: yesButtonSize }}
                whileHover={{ 
                  scale: yesButtonSize * 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                whileTap={{ scale: yesButtonSize * 0.95 }}
                onClick={handleYesClick}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="bg-gradient-to-r from-pink-400 via-pink-500 to-purple-500 hover:from-pink-500 hover:via-purple-500 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-full text-xl md:text-2xl shadow-lg border-2 border-pink-300 hover:border-pink-200"
              >
                💖 Yes, I will! 💖
              </motion.button>
              
              {noClicks < 9 && (
                <motion.button
                  key={noClicks}
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={handleNoClick}
                  className="bg-gradient-to-r from-rose-300 to-rose-500 hover:from-rose-400 hover:to-rose-600 text-white font-bold py-4 px-8 rounded-full text-xl md:text-2xl shadow-lg transition-all duration-300 transform border-2 border-rose-200 hover:border-rose-100"
                >
                  😢 No, not yet 😢
                </motion.button>
              )}
            </motion.div>
            
            {noClicks > 0 && noClicks < 9 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center"
                style={{ marginTop: `${Math.max(1.5, noClicks * 0.5)}rem` }}
              >
                <motion.p
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 2, -2, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-pink-600 text-lg font-semibold mb-2"
                >
                  💕 Are you sure? 💕
                </motion.p>
                <p className="text-pink-500 text-base">
                  The "Yes" button is getting bigger and cuter! 🌸✨
                </p>
              </motion.div>
            )}
          </motion.div>
        )}

        {showCelebration && (
          <motion.div
            key="celebration"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center relative z-10"
          >
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.05, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-6xl md:text-8xl mb-4"
            >
              💕💖💕
            </motion.div>
            
            <motion.h1
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
              className="text-5xl md:text-8xl font-bold text-pink-600 mb-4 drop-shadow-lg"
            >
              YES! 💍💖
            </motion.h1>
            
            <motion.h2
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
              className="text-3xl md:text-5xl font-bold text-purple-600 drop-shadow-lg mb-6"
            >
              FOREVER! 💕
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
              className="text-2xl md:text-3xl text-pink-500 font-semibold mb-8"
            >
              💖 We're getting married! 💖
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8"
            >
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-6xl md:text-8xl mb-4"
              >
                🎉💕🎊
              </motion.div>
              
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-4xl md:text-6xl"
              >
                💖💕💖💕💖
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default App
