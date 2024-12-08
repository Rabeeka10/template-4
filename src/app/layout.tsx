import './globals.css';
import { Josefin_Sans as JosefinSans } from 'next/font/google';

const josefinSans = JosefinSans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Choose the weights you need
});

export const metadata = {
  title: 'My App',
  description: 'practice hackathon',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={josefinSans.className}>
      <body>{children}</body>
    </html>
  );
}
