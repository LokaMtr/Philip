import { cta } from '../data';

export default function CTASection() {
  return (
    <section id="contact" className="relative bg-dark-blue py-16 text-center text-light-gray">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.15),transparent)]"></div>
      <div className="container mx-auto px-4">
        <h2 className="font-playfair text-3xl">{cta.title}</h2>
        <p className="mx-auto mt-4 max-w-xl">{cta.description}</p>
        <form className="mx-auto mt-8 flex max-w-md flex-col gap-4 sm:flex-row">
          <input
            type="email"
            placeholder="Your email"
            className="flex-1 rounded px-4 py-2 text-dark-blue"
          />
          <button
            className="rounded border border-gold bg-navy px-6 py-2 font-medium text-gold transition-colors hover:bg-gold hover:text-navy"
          >
            {cta.button}
          </button>
        </form>
      </div>
    </section>
  );
}
