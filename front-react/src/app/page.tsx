import { ModalProvider } from '@/shared/hooks/useModal'
import { Home as HomePage } from './modules/Home/home'

export default function Home() {
  return (
    <ModalProvider>
      <HomePage />
    </ModalProvider>
  )
}
