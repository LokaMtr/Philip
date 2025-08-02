export default function ServiceCard({ title, description }) {
  return (
    <div className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
      <h3 className="font-playfair text-xl font-semibold text-dark-blue">
        {title}
      </h3>
      <p className="mt-2 text-sm text-dark-blue/80">{description}</p>
    </div>
  );
}

