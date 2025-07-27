import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { StoreProvider } from '../lib/providers'; // Import the new provider

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Video Conferencing Platform',
  description: 'Enterprise video conferencing solution with AI features',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Use the new StoreProvider here */}
        <StoreProvider>
          {children}
        </StoreProvider>
      </body>
    </html>
  );
}

