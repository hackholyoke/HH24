import '../styles/globals.css'
import Head from 'next/head';
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from '@vercel/speed-insights/next';

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  // Also supported by less commonly used
  // interactiveWidget: 'resizes-visual',
}

export const metadata  = {
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: '32x32',
        type: 'image/x-icon',
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no"/>
        <link rel="icon" href={metadata.icons.icon[0].url} sizes={metadata.icons.icon[0].sizes} type={metadata.icons.icon[0].type} />
        <title>HackHolyoke 2024</title>
        <meta name="google-site-verification" content="Hx0XNhaS4BBCzzF5fp6ywmIxuuypBjHqsyDli3N2wqM" />
      </Head>
      <body >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
      
    </html>
  );
}
