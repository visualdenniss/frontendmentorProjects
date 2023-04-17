import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import './Modal.css'

// https://headlessui.com/react/dialog

const Modal = ({isOpen, setIsOpen, name, children}) => {

  return (
    <Transition
    appear
    show={isOpen}
    as={Fragment}>
    <Dialog as="div" className="signup-dialog" onClose={() => setIsOpen(false)}>
    <Transition.Child
            as={Fragment}
            enter="enter"
            enterFrom="enter-from"
            enterTo="enter-to"
            leave="leave ease-in"
            leaveFrom="leave-from"
            leaveTo="leave-to"
        >
        <div className="signup-dialog-panel-overlay" aria-hidden="true" />
    </Transition.Child>

    <div className="signup-dialog-panel-outside">
        <div className="signup-dialog-panel-wrapper">
            <Transition.Child
                    as={Fragment}
                    enter="enter2"
                    enterFrom="enter-from2"
                    enterTo="enter-to2"
                    leave="leave2"
                    leaveFrom="leave-from2"
                    leaveTo="leave-to2"
            >
                <Dialog.Panel className="signup-dialog-panel">
                    {children}
                    <button
                    aria-label="Close Modal"
                    onClick={() => setIsOpen(false)}>Got it, thanks!</button>
                </Dialog.Panel>
            </Transition.Child>
        </div>
    </div>
    </Dialog>
    </Transition>
  )
}

export default Modal