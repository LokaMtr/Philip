export default function StatsSection() {
  return (
    <section className="bg-dark-blue py-12 text-center text-light-gray animate-fadeInUp" id="stats">
      <p className="font-medium">
        Trusted by <span className="text-gold">300+ entrepreneurs</span> worldwide
      </p>
      <div className="mt-6 flex justify-center gap-8 text-sm text-light-gray/70">
        <span>Chase</span>
        <span>Amex</span>
        <span>Revolut</span>
      </div>
    </section>
  );
}
