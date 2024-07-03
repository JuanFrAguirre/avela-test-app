'use client'
import { Modal } from '@/shared/components/Modal/modal'
import { useModal } from '@/shared/hooks/useModal'
import { useMovies } from '@/shared/hooks/useMovies'
import {
  Dispatch,
  FC,
  FormEvent,
  SetStateAction,
  useCallback,
  useEffect,
  useRef,
} from 'react'

interface Props {
  setRefetchMovies: Dispatch<SetStateAction<boolean>>
}

export const AddMovieModal: FC<Props> = ({ setRefetchMovies }) => {
  const { modal, setShow } = useModal(AddMovieModal.displayName!)
  const { createMovie } = useMovies()
  const formRef = useRef<any>(null)

  const addMovie = useCallback(
    async (e: FormEvent) => {
      e.preventDefault()
      try {
        await createMovie(formRef.current.title.value)
        setRefetchMovies(true)
        setShow(false)
      } catch (error) {
        console.error(error)
      }
    },
    [createMovie, setRefetchMovies, setShow],
  )

  useEffect(() => {
    if (modal && formRef?.current?.title) formRef.current.title.focus()
  }, [modal])

  return (
    <>
      {modal.show ? (
        <Modal closeModal={() => setShow(false)} title="Add a movie">
          <form
            className="flex flex-col items-center gap-10 md:gap-20 h-full"
            onSubmit={addMovie}
            ref={formRef}
          >
            <div className="flex flex-col gap-5 md:gap-10 w-full md:w-[60%] max-w-[600px]">
              <label htmlFor="title" className="text-lg md:text-2xl">
                Movie Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                className="bg-stone-50 border border-brandPurple rounded-lg px-4 py-2 md:text-xl"
              />
            </div>
            <button className="px-6 py-2 bg-brandPurple text-white rounded-xl md:text-xl font-semibold uppercase">
              Submit
            </button>
          </form>
        </Modal>
      ) : null}
    </>
  )
}

AddMovieModal.displayName = 'AddMovieModal'
