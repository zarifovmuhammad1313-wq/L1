import type { Metadata, Viewport } from 'next';
import './globals.css';
import { Providers } from './providers';

export const metadata: Metadata = {
  title: 'LaundryPro CRM - Premium Furniture Cleaning Management',
  description: 'Professional CRM system for furniture cleaning businesses'
};

export const viewport: Viewport = {
  colorScheme: 'dark'
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
