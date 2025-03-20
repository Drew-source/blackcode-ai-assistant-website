import '@/styles/globals.css';
import { Montserrat, Inter } from 'next/font/google';
import type { Metadata } from 'next';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Windows AI Assistant | Blackcode Research',
  description: 'The most advanced AI assistant for Windows, connecting multiple AI models with real-world systems through Model Context Protocol (MCP)',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable} dark`}>
      <body className="min-h-screen bg-neutral-light dark:bg-dark-bg">
        {children}
      </body>
    </html>
  );
} 