import '../styles/globals.css'
import Head from 'next/head';



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
        <link rel="icon" href={metadata.icons.icon[0].url} sizes={metadata.icons.icon[0].sizes} type={metadata.icons.icon[0].type} />
      </Head>
      <title>HackHolyoke 2024</title>
      <body style={{backgroundImage: 'linear-gradient(to bottom, black , #2c3c94 , black, #2c3c94 , black)'
}}>{children}</body>
      
    </html>
  );
}
