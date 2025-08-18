import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'

function App() {
  const [noClicks, setNoClicks] = useState(0)
  const [showProposal, setShowProposal] = useState(false)
  const [showCelebration, setShowCelebration] = useState(false)
  const [showLetter, setShowLetter] = useState(true)
  const [letterText, setLetterText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const proposalText = "Will you be mine forever Ammu?"
  
  useEffect(() => {
    if (showLetter && currentIndex < proposalText.length) {
      const timer = setTimeout(() => {
        setLetterText(proposalText.slice(0, currentIndex + 1))
        setCurrentIndex(currentIndex + 1)
      }, 100)
      return () => clearTimeout(timer)
    } else if (currentIndex >= proposalText.length) {
      setTimeout(() => {
        setShowLetter(false)
        setShowProposal(true)
      }, 2000)
    }
  }, [currentIndex, showLetter, proposalText])

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
  const noButtonSize = Math.max(0.3, 1 - (noClicks * 0.1)) // Decrease size by 10% each time, minimum 0.3

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden" style={{ backgroundColor: '#F4C2C2' }}>
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
      
      {/* Surprise Letter Animation */}
      <AnimatePresence mode="wait">
        {showLetter && (
          <motion.div
            key="letter"
            initial={{ scale: 0, rotate: -180, y: 100 }}
            animate={{ scale: 1, rotate: 0, y: 0 }}
            exit={{ scale: 0, rotate: 180, y: -100 }}
            transition={{ type: "spring", stiffness: 100, damping: 10 }}
            className="absolute inset-0 flex items-center justify-center z-20"
          >
            <motion.div
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-3xl shadow-2xl p-10 md:p-16 w-[70vw] h-[70vh] mx-4 border-8 border-pink-300 flex flex-col items-center justify-center overflow-hidden"
              style={{ backgroundColor: 'white' }}
            >
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [0, 5, -5, 0],
                  y: [0, -10, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="text-6xl md:text-8xl text-center mb-8"
              >
                💌
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                className="text-3xl md:text-4xl font-bold text-pink-600 mb-6 text-center"
              >
                A Surprise Letter💕
              </motion.h1>
              
              <motion.div
                className="text-xl md:text-2xl text-gray-700 leading-relaxed text-center font-semibold"
                style={{ minHeight: "4rem" }}
              >
                {letterText}
                <motion.span
                  animate={{ opacity: [1, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity }}
                  className="inline-block w-2 h-8 bg-pink-500 ml-2"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, type: "spring", stiffness: 100 }}
                className="text-center mt-8 text-pink-500 text-lg font-semibold"
              >
                💖 With all my love 💖
              </motion.div>
            </motion.div>
            
            {/* Sparkle effects around the letter */}
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={`letter-sparkle-${i}`}
                className="absolute text-yellow-400 text-2xl"
                style={{
                  left: `${20 + (i * 10)}%`,
                  top: `${10 + (i * 15)}%`,
                }}
                initial={{ opacity: 0, scale: 0, rotate: 0 }}
                animate={{ 
                  opacity: [0, 1, 0],
                  scale: [0, 1, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
              >
                ✨
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      
      <AnimatePresence mode="wait">
        {showProposal && (
          <motion.div
            key="proposal"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="w-[70vw] h-[70vh] bg-white rounded-3xl shadow-2xl border-8 border-pink-300 flex flex-col items-center justify-center p-8 md:p-12 overflow-hidden"
            style={{ backgroundColor: 'white' }}
          >
            <motion.h1
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl font-bold text-pink-600 mb-8 drop-shadow-lg text-center"
            >
              💕 Will you marry me? 💕
            </motion.h1>
            
            <motion.div
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-2xl md:text-3xl text-pink-500 mb-8 font-semibold text-center"
            >
              💖 Pretty please? 💖
            </motion.div>
            
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center justify-center flex-1"
              style={{ gap: `${Math.max(4, noClicks * 1)}rem` }}
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
                  animate={{ scale: noButtonSize }}
                  whileHover={{ 
                    scale: noButtonSize * 1.05,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                  whileTap={{ scale: noButtonSize * 0.95 }}
                  onClick={handleNoClick}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="bg-gradient-to-r from-rose-300 to-rose-500 hover:from-rose-400 hover:to-rose-600 text-white font-bold py-4 px-8 rounded-full text-xl md:text-2xl shadow-lg border-2 border-rose-200 hover:border-rose-100"
                >
                  😢 No, not yet 😢
                </motion.button>
              )}
            </motion.div>
            
            {noClicks > 0 && noClicks < 9 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mt-4"
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
            className="w-[70vw] h-[70vh] bg-white rounded-3xl shadow-2xl border-8 border-pink-300 flex flex-col items-center justify-center p-8 md:p-12 overflow-hidden relative z-10"
            style={{ backgroundColor: 'white' }}
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
                className="text-6xl md:text-8xl mb-4 text-center"
              >
                💕💖💕
              </motion.div>
            
                          <motion.h1
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
                className="text-5xl md:text-8xl font-bold text-pink-600 mb-4 drop-shadow-lg text-center"
              >
                YES! 💍💖
              </motion.h1>
              
              <motion.h2
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, type: "spring", stiffness: 100 }}
                className="text-3xl md:text-5xl font-bold text-purple-600 drop-shadow-lg mb-6 text-center"
              >
                FOREVER! 💕
              </motion.h2>
            
                          <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
                className="text-2xl md:text-3xl text-pink-500 font-semibold mb-8 text-center"
              >
                💖 I love you BANGARAM, will be always yours 💖
              </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="mt-8 text-center"
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
