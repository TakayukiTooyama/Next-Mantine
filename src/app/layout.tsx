import '@/style/global.css';

import type { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'Next x Mantine Sterter',
    template: '%s | Next x Mantine Sterter',
  },
  description: 'Next.js13 x Mantine テンプレート',
  icons: {
    icon: '/favicon.ico',
  },
};

type RootLayoutProps = {
  children: React.ReactNode;
};

const RootLayout: NextPage<RootLayoutProps> = ({ children }) => {
  return (
    <html lang='ja'>
      <head />
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
