import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0a1c3f] via-[#1a2f5f] to-[#0a1c3f] py-24 text-center text-light-gray">
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-playfair font-bold md:text-6xl"
        >
          Payment Processor Hong Kong
        </motion.h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg md:text-xl">
          Global payment structuring from Hong Kong and beyond
        </p>
        <motion.div
          className="mx-auto mt-10 w-64 rounded-lg bg-white/10 p-6 shadow-lg backdrop-blur-md"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <p className="text-sm">Open a Chase Business Account for Non-Residents</p>
        </motion.div>
      </div>
    </section>
  );
}

