import React from 'react';
import ReactDOM from 'react-dom';
import { Transition } from '@headlessui/react'; // Optional for smooth animations

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <Transition
      show={isOpen}
      enter="transition ease-out duration-300"
      enterFrom="transform scale-95 opacity-0"
      enterTo="transform scale-100 opacity-100"
      leave="transition ease-in duration-200"
      leaveFrom="transform scale-100 opacity-100"
      leaveTo="transform scale-95 opacity-0"
    >
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-white w-full max-w-lg mx-4 md:mx-0 rounded-lg shadow-lg p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          >
            &times;
          </button>
          <div
            className="text-gray-800"
            dangerouslySetInnerHTML={{ __html: content }}
          />
        </div>
      </div>
    </Transition>,
    document.body
  );
};

export default Modal;


