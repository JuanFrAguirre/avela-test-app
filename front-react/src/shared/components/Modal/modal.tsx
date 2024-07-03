'use client'
import { useModal } from '@/shared/hooks/useModal'
import { FC, ReactNode } from 'react'

interface Props {
  children: ReactNode
  closeModal: () => void
  title: string
}

export const Modal: FC<Props> = ({ children, closeModal, title }) => {
  return (
    <div className="z-[200]">
      <div
        className="fixed left-0 right-0 -top-10 bottom-0 bg-black/40"
        onClick={closeModal}
      ></div>
      <div className="fixed left-0 right-0 top-0 bottom-0 w-[70vw] h-[400px] md:h-[500px] shadow-2xl bg-stone-50 m-auto rounded-xl">
        <button
          className="absolute md:top-10 top-5 md:right-10 right-5"
          onClick={closeModal}
        >
          ❌
        </button>
        <h2 className="py-10 text-2xl md:text-4xl font-semibold text-center">
          {title}
        </h2>
        <section className="px-10 overflow-y-auto h-[400px]">
          {children}
        </section>
      </div>
    </div>
  )
}
