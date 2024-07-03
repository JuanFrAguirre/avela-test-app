'use client'
import Image from 'next/image'
import Link from 'next/link'
import AvelaLogo from '../../../../public/avela.png'
import { Add } from '@/shared/icons/Add'
import { useModal } from '@/shared/hooks/useModal'
import { AddMovieModal } from '@/app/modules/Movies/addMovieModal'

export const Header = () => {
  const { setShow } = useModal(AddMovieModal.displayName!)

  const openModal = () => {
    setShow(true)
  }

  return (
    <>
      <header className="text-stone-50">
        <div className="flex justify-between px-16 max-md:px-10 py-6">
          <Link href={'/'} className="flex items-center gap-5">
            <Image
              src={AvelaLogo}
              alt="Avela logo"
              className="w-12 h-12 max-md:w-10 max-md:h-10"
            />
            <h1 className="text-4xl max-md:text-[24px]">AVELA VIDEO STORE</h1>
          </Link>
          <nav className="flex items-center gap-4 max-md:hidden md:text-lg">
            <Link href={'/'}>
              <p className="font-light">Home</p>
            </Link>
            <button onClick={openModal}>
              <p className="font-light">Add a movie</p>
            </button>
          </nav>
        </div>
      </header>
      <button
        onClick={openModal}
        className="hidden max-md:flex fixed z-[100] bottom-10 right-6 bg-brandPurple rounded-xl justify-center items-center active:translate-y-[2px] p-3 px-5 border-white border"
      >
        {/* <Add fill="#6031AA" /> */}
        <p className="text-white text-xl font-bold">Add movie</p>
      </button>
    </>
  )
}
