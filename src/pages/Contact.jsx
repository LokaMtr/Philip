export default function Contact() {
  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="font-playfair text-3xl text-dark-blue">Contact Us</h2>
      <form className="mt-8 grid max-w-xl gap-4">
        <input
          type="text"
          placeholder="Name"
          className="rounded border border-dark-blue/20 p-2 focus:outline-none focus:ring-2 focus:ring-gold"
        />
        <input
          type="email"
          placeholder="Email"
          className="rounded border border-dark-blue/20 p-2 focus:outline-none focus:ring-2 focus:ring-gold"
        />
        <textarea
          rows="4"
          placeholder="Message"
          className="rounded border border-dark-blue/20 p-2 focus:outline-none focus:ring-2 focus:ring-gold"
        />
        <button
          type="submit"
          className="rounded bg-gradient-to-r from-dark-blue to-navy px-4 py-2 font-medium text-white transition-colors hover:from-gold hover:to-gold-light"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}

