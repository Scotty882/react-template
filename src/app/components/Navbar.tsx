'use client';

import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-gray-900 text-white">
      <div className="text-xl font-bold">SiteTitle</div>
      <ul className="flex gap-6">
        <li><Link href="/">Option1</Link></li>
        <li><Link href="/">Option2</Link></li>
        <li><Link href="/">Option3</Link></li>
      </ul>
    </nav>
  );
}