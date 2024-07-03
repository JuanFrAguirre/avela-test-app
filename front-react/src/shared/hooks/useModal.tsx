'use client'
import React, {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react'

interface Modal {
  show?: boolean
}

interface ModalStateHolder {
  [id: string]: Modal
}

interface ModalContext {
  state: ModalStateHolder
  setState: React.Dispatch<React.SetStateAction<ModalStateHolder>>
}

const context = createContext<ModalContext>({
  state: {},
  setState() {},
})

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState<ModalStateHolder>({})

  const value = useMemo(() => ({ state, setState }), [state, setState])

  return <context.Provider value={value}>{children}</context.Provider>
}

export function useModal(id: string) {
  const modalContext = useContext(context)

  const currentModal = useMemo(() => {
    if (modalContext.state[id]) {
      return modalContext.state[id]
    }

    modalContext.state[id] = {
      show: false,
    }

    return modalContext.state[id]
  }, [modalContext.state, id])

  const setShow = useCallback(
    (show: boolean) => {
      modalContext.setState((prevState) => ({
        ...prevState,
        [id]: { ...prevState[id], show },
      }))
    },
    [modalContext, id],
  )

  const toggle = useCallback(() => {
    setShow(currentModal ? !modalContext.state[id]?.show : true)
  }, [currentModal, modalContext.state, id, setShow])

  return {
    modal: currentModal,
    toggle,
    setShow,
  }
}
