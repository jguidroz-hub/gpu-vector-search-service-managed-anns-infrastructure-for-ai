import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { SessionProvider } from 'next-auth/react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GPU Vector Search Service - Managed ANNS infrastructure for AI applications',
  description: 'Value Proposition: Provides high-performance GPU-based vector search as managed service, eliminating need for ML teams to build custom ANNS infrastructure. Handles scaling, optimization, and model updates automatically.

Target Customer: AI/ML teams at mid-market companies, recommendation system developers, search infrastructure engineers

---
Category: Developer Tools
Target Market: AI/ML teams at mid-market companies, recommendation system developers, search infrastructure engineers
Source Hypothesis ID: 2d892d7d-7b05-4031-9a9f-7261b2ff6b91
Promotion Type: automatic',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider>
          <nav className="border-b">
            <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
              <a href="/" className="font-bold text-lg">GPU Vector Search Service - Managed ANNS infrastructure for AI applications</a>
              <div className="flex items-center gap-4">
                <a href="/dashboard" className="text-sm hover:text-blue-600">Dashboard</a>
                <a href="/pricing" className="text-sm hover:text-blue-600">Pricing</a>
              </div>
            </div>
          </nav>
          <main>{children}</main>
        </SessionProvider>
      </body>
    </html>
  );
}
