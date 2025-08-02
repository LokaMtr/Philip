import { faqs } from '../data';
import FAQAccordion from './FAQAccordion';

export default function FAQSection() {
  return (
    <section id="faq" className="bg-navy py-16 text-light-gray">
      <div className="container mx-auto max-w-2xl px-4">
        <h2 className="text-center font-playfair text-3xl">FAQ</h2>
        <div className="mt-8">
          {faqs.map((f, idx) => (
            <FAQAccordion key={idx} {...f} />
          ))}
        </div>
      </div>
    </section>
  );
}
