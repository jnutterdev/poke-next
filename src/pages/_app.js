import { Press_Start_2P } from 'next/font/google';
import '@/styles/globals.css'
import "nes.css/css/nes.min.css";

export const text = Press_Start_2P({
  subsets: ['latin'],
  weight: ['400'],
  fallback: ['cursive', 'sans-serif'],
});

export default function App({ Component, pageProps }) {

  return (
    <main className={text.className}>
      <Component {...pageProps} />
    </main>
  )
}
