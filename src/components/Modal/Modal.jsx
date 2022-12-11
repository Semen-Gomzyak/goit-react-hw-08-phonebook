import { createPortal } from 'react-dom';
import React, { useEffect } from 'react';
import { Overlay, ModalBlock } from './Modal.styled';

const rootRef = document.querySelector('#root');

export function Modal({ closeModal, modalCard, children }) {
  useEffect(() => {
    window.addEventListener('keydown', closeModalByEsc);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [closeModal]);

  const closeModalByEsc = e => {
    e.preventDefault();

    if (e.code === 'Escape') {
      closeModal();
    }

    return window.removeEventListener('keydown', closeModalByEsc);
  };

  const closeModalByBackdrop = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return createPortal(
    <Overlay data-modal="wrap" onClick={closeModalByBackdrop}>
      <ModalBlock>
        {children}
      </ModalBlock>
    </Overlay>,
    rootRef
  );
}