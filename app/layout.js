import './globals.css'
import { Montserrat } from 'next/font/google'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer';
import Cart from './components/Cart/Cart';

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
        {children}
        <Cart />
        <Footer />
      </body>
    </html>
  )
}
