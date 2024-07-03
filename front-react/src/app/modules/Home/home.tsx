import { Header } from '@/shared/components/Header/header'
import { Movies } from '../Movies/movies'
import { Lato } from 'next/font/google'

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
})

export const Home = () => {
  return (
    <div className={lato.className}>
      <div className="bg-brandPurple text-stone-50 min-h-screen">
        <Header />
        <Movies />
      </div>
    </div>
  )
}
