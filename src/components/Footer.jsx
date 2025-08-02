export default function Footer() {
  return (
    <footer className="bg-navy py-8 text-center text-light-gray">
      <div className="container mx-auto px-4">
        <div className="mb-4 flex justify-center space-x-4">
          <a href="#" className="hover:text-gold">Twitter</a>
          <a href="#" className="hover:text-gold">LinkedIn</a>
          <a href="#" className="hover:text-gold">Facebook</a>
        </div>
        <p className="text-sm">&copy; {new Date().getFullYear()} Prime Circle Banking</p>
      </div>
    </footer>
  );
}

