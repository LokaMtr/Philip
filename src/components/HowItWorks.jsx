import { steps } from '../data';

export default function HowItWorks() {
  return (
    <section id="how" className="bg-dark-blue py-16 text-light-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-playfair text-3xl">How It Works</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {steps.map((s, idx) => (
            <div key={idx} className="text-center animate-fadeInUp">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-navy text-2xl">
                {s.icon}
              </div>
              <h3 className="mt-4 font-playfair text-xl text-gold">{s.title}</h3>
              <p className="mt-2 text-sm text-light-gray/80">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
