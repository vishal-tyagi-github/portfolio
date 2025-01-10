import './globals.css';
import { Syne } from 'next/font/google';
import { ThemeProvider } from './components/theme-provider';

const syne = Syne({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-syne',
});

export const metadata = {
  title: 'Vishal Tyagi - Frontend Developer',
  description:
    'Portfolio of Vishal Tyagi, an experienced frontend developer specializing in React.js and Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={syne.variable} suppressHydrationWarning>
      <body className="bg-[var(--background)] text-[var(--foreground)]">
        <ThemeProvider
          attribute="data-theme"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
