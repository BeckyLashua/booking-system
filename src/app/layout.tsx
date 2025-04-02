import './globals.css';
import { ReactNode } from 'react';
import Navbar from '../../components/layout/Navbar/Navbar';


export const metadata = {
  title: "RML Booking System",
  description: "booking system site",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900 min-h-screen">
        <Navbar />
        <main className="p-6 max-w-5xl mx-auto">{children}</main>
      </body>
    </html>
  );
}