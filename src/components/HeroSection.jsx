import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden py-32 text-center text-light-gray"
      style={{ background: 'linear-gradient(135deg, #0a1c3f, #1a2f5f, #0a1c3f)' }}
    >
      <div className="container mx-auto px-4">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl font-playfair font-bold md:text-6xl"
        >
          Elite Banking Solutions for Global Entrepreneurs
        </motion.h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg md:text-xl">
          Chase Business Accounts. LLC + EIN in 24h. Global Payment Structuring.
        </p>
        <a
          href="#contact"
          className="mt-8 inline-block rounded border border-gold bg-navy px-8 py-3 font-medium text-gold transition-colors hover:bg-gold hover:text-navy"
        >
          Get Started
        </a>
        <motion.div
          className="mx-auto mt-16 w-72 rounded-xl bg-white/10 p-6 shadow-lg backdrop-blur-md ring-1 ring-gold/30"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          <p className="text-sm">Open a Chase Business Account for Non-Residents</p>
        </motion.div>
      </div>
    </section>
  );
}
