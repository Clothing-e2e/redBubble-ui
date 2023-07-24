import './globals.css'
import { Montserrat } from 'next/font/google'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Context from './Context';

const montserrat = Montserrat({ variable: '--font-montserrat', subsets: ['latin'] });

export const metadata = {
  title: 'RedBubble',
  description: 'Clothing brand',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} font-montserrat`}>
        <Header />
        <Context>{children}</Context>
        <Footer />
      </body>
    </html>
  )
}
