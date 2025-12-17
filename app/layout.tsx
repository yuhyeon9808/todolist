import type { Metadata } from 'next';
import { pretandard } from '@/lib/fonts/fonts';
import './globals.css';

export const metadata: Metadata = {
  title: 'To-Do List',
  description: '간단한 to-do-list',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={pretandard.variable}>{children}</body>
    </html>
  );
}
