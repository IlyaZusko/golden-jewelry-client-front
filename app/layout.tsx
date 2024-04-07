/* eslint-disable import/order */
import localFont from 'next/font/local';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

// eslint-disable-next-line import/no-unassigned-import
import './globals.css';
import { cn } from '@/lib/utils';
import { Providers } from '@/lib/store/providers';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

const fog = localFont({
  src: [
    {
      path: '../public/fonts/FoglihtenNo06_076.otf',
    },
  ],
  variable: '--font-fog',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={cn('min-h-screen', fog.variable, inter.className)}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
