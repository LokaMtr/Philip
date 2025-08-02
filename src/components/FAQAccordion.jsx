import { useState } from 'react';

export default function FAQAccordion({ question, answer }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-light-gray/10 py-4">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between text-left"
      >
        <span className="font-medium">{question}</span>
        <span>{open ? '-' : '+'}</span>
      </button>
      {open && <p className="mt-2 text-sm text-light-gray/80">{answer}</p>}
    </div>
  );
}
