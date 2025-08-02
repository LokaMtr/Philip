export default function ServiceCard({ title, description, icon }) {
  return (
    <div className="rounded-lg bg-dark-blue/30 p-6 text-light-gray transition transform hover:-translate-y-1 hover:shadow-lg hover:shadow-gold/40">
      <div className="text-3xl">{icon}</div>
      <h3 className="mt-4 font-playfair text-xl text-gold">{title}</h3>
      <p className="mt-2 text-sm text-light-gray/80">{description}</p>
    </div>
  );
}
