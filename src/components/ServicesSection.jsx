import { services } from '../data';
import ServiceCard from './ServiceCard';

export default function ServicesSection() {
  return (
    <section id="services" className="bg-navy py-16 text-light-gray">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-playfair text-3xl">Our Services</h2>
        <div className="mt-10 grid gap-8 md:grid-cols-2">
          {services.map((s, idx) => (
            <ServiceCard key={idx} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
}
