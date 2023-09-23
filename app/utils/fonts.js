import { Inter, Oswald, Roboto_Condensed } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const oswald = Oswald({
    subsets: ['latin'],
    weight: ['variable'],
})
const robotoCondensed = Roboto_Condensed({
    subsets: ['latin'],
    weight: ['300', '400', '700'],
})

export { robotoCondensed, oswald }
