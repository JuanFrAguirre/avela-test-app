import { Header } from '@/shared/components/Header/header'
import { Lato } from 'next/font/google'
import { Movies } from './modules/Movies/movies'
import { ModalProvider } from '@/shared/hooks/useModal'

const lato = Lato({
  subsets: ['latin'],
  weight: ['100', '300', '400', '700', '900'],
})

export default function Home() {
  return (
    <ModalProvider>
      <div className={lato.className}>
        <div className="bg-brandPurple text-stone-50 min-h-screen">
          <Header />
          <Movies />
        </div>
      </div>
    </ModalProvider>
  )
}
