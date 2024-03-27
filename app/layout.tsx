import '@/app/ui/global.css';
import { sans } from './ui/fonts';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${sans.className} antialiased`}>{children}</body>
    </html>
  );
}
