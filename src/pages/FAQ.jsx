import FAQAccordion from '../components/FAQAccordion';
import { faqs } from '../data';

export default function FAQ() {
  return (
    <section className="container mx-auto px-4 py-16">
      {faqs.map((f, idx) => (
        <FAQAccordion key={idx} {...f} />
      ))}
    </section>
  );
}

