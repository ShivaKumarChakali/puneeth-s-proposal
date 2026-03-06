import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import confetti from 'canvas-confetti'

function App() {
  const [step, setStep] = useState(0)
  const [favoriteVibe, setFavoriteVibe] = useState('late-night talks')
  const [hasSaidYes, setHasSaidYes] = useState(false)

  const cardClasses =
    'w-[80vw] max-w-[40rem] min-h-[220px] px-6 py-6 sm:px-8 sm:py-7 md:px-10 md:py-8'

  const totalSteps = 4
  const currentStepNumber = hasSaidYes ? totalSteps : Math.min(step + 1, totalSteps)

  const handleRestart = () => {
    setStep(0)
    setFavoriteVibe('late-night talks')
    setHasSaidYes(false)
  }

  const handleYesClick = () => {
    if (hasSaidYes) return

    setHasSaidYes(true)
    confetti({
      particleCount: 180,
      spread: 120,
      startVelocity: 35,
      scalar: 1.1,
      origin: { y: 0.4 },
    })
  }

  const renderStep = () => {
    if (step === 0) {
      return (
        <div className={cardClasses}>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-[11px] sm:text-xs vh-meta uppercase tracking-[0.15em] sm:tracking-[0.2em] text-rose-400 mb-2 sm:mb-3"
          >
            A tiny story for CARROTS
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, type: 'spring', stiffness: 110, damping: 14 }}
            className="text-2xl sm:text-3xl md:text-4xl vh-heading-main font-bold text-rose-600 mb-3 sm:mb-4"
          >
            Hey CARROTS,
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-sm sm:text-base md:text-lg vh-body text-slate-700 leading-relaxed mb-6 sm:mb-8"
          >
            I built a small, quiet place on this screen that exists only for us. It&apos;s not a letter,
            not a game, just a little journey I want to take with you.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="flex justify-end"
          >
            <motion.button
              whileHover={{ y: -2, scale: 1.04, boxShadow: '0 0 25px rgba(244, 63, 94, 0.65)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setStep(1)}
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-rose-400 via-rose-500 to-fuchsia-500 px-6 py-2.5 sm:px-7 text-sm sm:text-base font-semibold text-white shadow-lg shadow-rose-500/40 ring-2 ring-rose-300/40"
            >
              <span className="text-base sm:text-lg">Start the story</span>
              <span className="text-lg sm:text-xl">➜</span>
            </motion.button>
          </motion.div>
        </div>
      )
    }

    if (step === 1) {
      return (
        <div className={cardClasses}>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-[11px] sm:text-xs vh-meta uppercase tracking-[0.15em] sm:tracking-[0.2em] text-rose-400 mb-2 sm:mb-3"
          >
            Chapter one
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, type: 'spring', stiffness: 110, damping: 14 }}
            className="text-xl sm:text-2xl md:text-3xl vh-heading-sub font-bold text-slate-900 mb-4 sm:mb-6"
          >
            The ways you changed my ordinary days
          </motion.h2>
          <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="rounded-xl sm:rounded-2xl bg-rose-50 px-3 py-2.5 sm:px-4 sm:py-3 flex gap-2 sm:gap-3"
            >
              <span className="text-rose-500 mt-0.5 text-sm">①</span>
              <p className="text-xs sm:text-sm md:text-base text-slate-800">
                Suddenly the smallest things—messages, calls, your random thoughts—became the brightest pieces of my day.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="rounded-xl sm:rounded-2xl bg-rose-50 px-3 py-2.5 sm:px-4 sm:py-3 flex gap-2 sm:gap-3"
            >
              <span className="text-rose-500 mt-0.5 text-sm">②</span>
              <p className="text-xs sm:text-sm md:text-base text-slate-800">
                You make comfort feel easy—like I can be fully myself, no filters, no perfect lines, just me with you.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="rounded-xl sm:rounded-2xl bg-rose-50 px-3 py-2.5 sm:px-4 sm:py-3 flex gap-2 sm:gap-3"
            >
              <span className="text-rose-500 mt-0.5 text-sm">③</span>
              <p className="text-xs sm:text-sm md:text-base text-slate-800">
                Even on quiet days, just knowing you&apos;re somewhere on the other side of the screen makes everything softer.
              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex justify-between items-center"
          >
            <button
              onClick={() => setStep(0)}
              className="text-[11px] sm:text-xs md:text-sm text-slate-400 hover:text-slate-100 transition-colors underline-offset-4 hover:underline"
            >
              Back to the beginning
            </button>
            <motion.button
              whileHover={{ y: -2, scale: 1.04, boxShadow: '0 0 20px rgba(15, 23, 42, 0.7)' }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setStep(2)}
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-2.5 sm:px-7 text-sm sm:text-base font-semibold text-white shadow-md shadow-slate-900/40 ring-1 ring-slate-500/60"
            >
              <span>Keep going</span>
              <span className="text-base">→</span>
            </motion.button>
          </motion.div>
        </div>
      )
    }

    if (step === 2) {
      const vibes = [
        {
          id: 'late',
          label: 'Late-night talks',
          description: 'Endless conversations where time quietly disappears.',
        },
        {
          id: 'adventures',
          label: 'Random adventures',
          description: 'Spontaneous plans, inside jokes, and getting lost together.',
        },
        {
          id: 'quiet',
          label: 'Soft, quiet moments',
          description: 'Silence that still feels full, just because it&apos;s with you.',
        },
      ]

      return (
        <div className={cardClasses}>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-[11px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-rose-400 mb-2 sm:mb-3"
          >
            Just one small choice
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, type: 'spring', stiffness: 110, damping: 14 }}
            className="text-xl sm:text-2xl md:text-3xl vh-heading-sub font-bold text-slate-900 mb-3 sm:mb-4"
          >
            Which kind of &quot;us&quot; feels most like home to you?
          </motion.h2>
          <p className="text-xs sm:text-sm md:text-base vh-body text-slate-700 mb-4 sm:mb-6">
            There&apos;s no wrong answer. I just want to know the version of us that makes your heart relax a little.
          </p>
          <div className="mb-6 sm:mb-8 w-full">
            <div className="mx-auto w-full max-w-md rounded-sm border border-slate-300 bg-white text-sm divide-y divide-slate-300">
              {vibes.map((vibe, index) => (
                <button
                  key={vibe.id}
                  onClick={() => {
                    setFavoriteVibe(vibe.label)
                    setStep(3)
                  }}
                  className="w-full text-left px-3 py-3 sm:px-4 sm:py-3 hover:bg-slate-50 focus:bg-slate-100 focus:outline-none"
                >
                  <div className="font-semibold text-slate-900">{vibe.label}</div>
                  <div className="mt-1 text-[11px] sm:text-xs md:text-sm text-slate-600">
                    {vibe.description}
                  </div>
                </button>
              ))}
            </div>
          </div>
          <div className="flex justify-between items-center flex-wrap gap-2">
            <button
              onClick={() => setStep(1)}
              className="text-[11px] sm:text-xs md:text-sm text-slate-500 hover:text-slate-700 transition-colors"
            >
              Back one chapter
            </button>
            <span className="text-[10px] sm:text-[11px] md:text-xs text-slate-400">
              I&apos;m taking all your answers gently, I promise.
            </span>
          </div>
        </div>
      )
    }

    // step 3 and beyond: the actual question
    if (!hasSaidYes) {
      return (
        <div className={cardClasses}>
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
            className="text-[11px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.2em] text-rose-400 mb-2 sm:mb-3"
          >
            The real question
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: -16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, type: 'spring', stiffness: 110, damping: 14 }}
            className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-3 sm:mb-4"
          >
            So, CARROTS… will you keep choosing this?
          </motion.h2>
          <p className="text-xs sm:text-sm md:text-base vh-body text-slate-700 mb-3 sm:mb-4">
            The smiles, the soft chaos, the{' '}
            <span className="font-semibold text-rose-500">{favoriteVibe.toLowerCase()}</span>, the way my day shifts
            the second you show up—will you keep doing life with me, on purpose?
          </p>
          <p className="text-xs sm:text-sm md:text-base vh-body text-slate-700 mb-6 sm:mb-8">
            Not just today, not just in this moment, but in all the versions of us that are still waiting to happen.
          </p>
          <div className="mt-2 flex flex-col items-center gap-3">
            <motion.button
              whileHover={{ y: -2, scale: 1.04, boxShadow: '0 0 26px rgba(244, 114, 182, 0.75)' }}
              whileTap={{ scale: 0.97 }}
              onClick={handleYesClick}
              className="w-full max-w-xs inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-rose-500 via-fuchsia-500 to-violet-500 px-7 py-3 text-sm sm:text-base font-semibold text-white shadow-lg shadow-fuchsia-500/40 ring-2 ring-fuchsia-300/70"
            >
              <span className="text-base sm:text-lg">Yes, I&apos;m all in</span>
              <span className="text-lg sm:text-xl">💖</span>
            </motion.button>
            <button
              onClick={() => setStep(2)}
              className="text-[11px] sm:text-xs md:text-sm text-slate-300 hover:text-slate-100 underline-offset-4 hover:underline"
            >
              Take me back one scene
            </button>
          </div>
        </div>
      )
    }

    return (
      <div className={cardClasses}>
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="text-[11px] sm:text-xs vh-meta uppercase tracking-[0.15em] sm:tracking-[0.2em] text-emerald-500 mb-2 sm:mb-3"
        >
          You said yes
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, type: 'spring', stiffness: 110, damping: 14 }}
          className="text-xl sm:text-2xl md:text-3xl vh-heading-sub font-bold text-slate-900 mb-3 sm:mb-4"
        >
          CARROTS, you have no idea how much this means to me.
        </motion.h2>
        <p className="text-xs sm:text-sm md:text-base vh-body text-slate-700 mb-2 sm:mb-3">
          Somewhere between all the conversations, the laughter, the quiet moments and the almost-silly little details,
          you became my favorite person.
        </p>
        <p className="text-xs sm:text-sm md:text-base vh-body text-slate-700 mb-2 sm:mb-3">
          Thank you for choosing this version of us. For choosing me. For letting me choose you, again and again.
        </p>
        <p className="text-xs sm:text-sm md:text-base vh-body text-slate-700 mb-6 sm:mb-8">
          I&apos;m yours. Fully, softly, and completely—now and in every chapter we haven&apos;t written yet.
        </p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex justify-between items-center flex-wrap gap-2"
        >
          <button
            onClick={handleRestart}
            className="text-[11px] sm:text-xs md:text-sm text-slate-500 hover:text-slate-700 transition-colors"
          >
            Replay the story
          </button>
          <span className="text-sm sm:text-base font-semibold text-rose-500">
            With love, always.
          </span>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen min-h-[100dvh] w-full bg-stone-50 text-slate-900 flex flex-col items-center justify-center px-4 py-6 sm:px-6 sm:py-8">
      <div className="w-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${step}-${hasSaidYes}`}
            initial={{ opacity: 0, y: 24, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -24, scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 120, damping: 16 }}
            className="w-full flex flex-col items-center max-w-[min(100%,36rem)]"
          >
            <div className="mb-4 sm:mb-5 md:mb-6 flex items-center justify-between w-full max-w-[min(100%,36rem)] text-[11px] sm:text-xs text-slate-500">
              <span className="uppercase tracking-[0.15em] sm:tracking-[0.18em] text-slate-500">
                For CARROTS
              </span>
              <span className="font-medium text-slate-600">
                Step {currentStepNumber} of {totalSteps}
              </span>
            </div>
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default App
