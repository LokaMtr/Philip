import ServiceCard from '../components/ServiceCard';
import { services } from '../data';

export default function Services() {
  return (
    <section className="container mx-auto grid gap-8 px-4 py-16 md:grid-cols-2">
      {services.map((s, idx) => (
        <ServiceCard key={idx} {...s} />
      ))}
    </section>
  );
}

