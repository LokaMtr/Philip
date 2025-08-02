import { useState } from 'react';

const links = [
  { href: '#services', label: 'Services' },
  { href: '#how', label: 'How It Works' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-20 bg-navy text-light-gray">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <a href="#" className="text-xl font-playfair">PrimeCircle</a>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          ☰
        </button>
        <nav className={`${open ? 'block' : 'hidden'} fixed inset-x-0 top-full bg-navy md:static md:block md:bg-transparent`}>
          <ul className="md:flex md:space-x-6">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 hover:text-gold"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
