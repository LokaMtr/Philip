import { cta } from '../data';

export default function CTASection() {
  return (
    <section className="bg-gradient-to-br from-[#0a1c3f] via-[#1a2f5f] to-[#0a1c3f] py-16 text-center text-light-gray">
      <h2 className="font-playfair text-3xl">{cta.title}</h2>
      <p className="mx-auto mt-4 max-w-xl">{cta.description}</p>
      <button className="mt-8 rounded bg-gradient-to-r from-dark-blue to-navy px-6 py-3 font-medium text-white transition-colors hover:from-gold hover:to-gold-light">
        {cta.button}
      </button>
    </section>
  );
}

