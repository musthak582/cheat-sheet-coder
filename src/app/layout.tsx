import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

// Import the Metadata type from 'next' if needed for detailed typing
import { Metadata } from 'next';

// Initialize the Google Font
const inter = Inter({ subsets: ['latin'] });

// Define the metadata using the Metadata API
export const metadata: Metadata = {
  title: 'Free Programming Cheatsheets for Beginners and Beyond',
  description: 'Discover a wide range of free programming cheatsheets to help you learn and code faster. Perfect for quick coding references across various languages including Python, JavaScript, Java, and more.',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
    shortcut: '/favicon-32x32.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
