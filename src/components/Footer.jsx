export default function Footer() {
  return (
    <footer className="bg-navy py-8 text-light-gray">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="font-playfair text-xl">PrimeCircle</div>
          <ul className="flex gap-6">
            <li><a href="#" className="hover:text-gold">Home</a></li>
            <li><a href="#services" className="hover:text-gold">Services</a></li>
            <li><a href="#faq" className="hover:text-gold">FAQ</a></li>
            <li><a href="#contact" className="hover:text-gold">Contact</a></li>
          </ul>
        </div>
        <p className="mt-6 text-center text-sm">&copy; 2025 Prime Circle Banking. All rights reserved.</p>
      </div>
    </footer>
  );
}
