import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from '../data';

export default function TestimonialCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((i) => (i + 1) % testimonials.length),
      5000
    );
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-light-gray py-16">
      <div className="container mx-auto px-4 text-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xl font-playfair text-dark-blue">
              {testimonials[index].quote}
            </p>
            <p className="mt-4 text-sm text-dark-blue/80">
              — {testimonials[index].author}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}

