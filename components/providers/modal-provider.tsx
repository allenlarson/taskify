'use client';

import { useEffect, useState } from 'react';
import { CardModal } from '../modals/card-modal';
import { ProModal } from '../modals/card-modal/pro-modal';

export const ModalProvider = () => {
  const [isMounted, setisMounted] = useState(false);

  useEffect(() => {
    setisMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <CardModal />
      <ProModal />
    </>
  );
};
