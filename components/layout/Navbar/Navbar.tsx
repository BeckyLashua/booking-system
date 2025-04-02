'use client'; // required because component contains interactivity

import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white px-6 py-4 flex justify-between items-center shadow-md">
      <h1 className="text-xl font-bold">RML Booking System</h1>
      <ul className="flex space-x-6">
        <li>
          <Link href="/" className="hover:text-blue-400 transition">Book an Appointment</Link>
        </li>
        <li>
          <Link href="/projects" className="hover:text-blue-400 transition">Search for Appointment</Link>
        </li>
        <li>
          <Link href="/resume" className="hover:text-blue-400 transition">Reschedule an Appointment</Link>
        </li>
        <li>
          <Link href="/contact" className="hover:text-blue-400 transition">Cancel an Appointment</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
