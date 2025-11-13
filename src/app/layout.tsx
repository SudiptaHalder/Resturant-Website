import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Holier - Modern Website Template',
  description: 'A modern website template inspired by Holier',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}