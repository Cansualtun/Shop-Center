import React, { FC } from 'react';
import useTranslation from 'next-translate/useTranslation';
import Button from '@/components/UI/Button/Button';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children :  any
}

const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
    const { t, lang } = useTranslation('common')
    const close = t('close')
  return (
    <div
      className={`fixed z-10 inset-0 overflow-y-auto ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      <div className="flex items-center justify-center min-h-screen">
        <div className="fixed inset-0 bg-gray-500 opacity-75"></div>
        <div className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-all max-w-lg mx-auto">
          <div className="px-4 py-5 sm:p-6">
            <div className="mb-4">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                {children}
              </h3>
            </div>
            <div className="mt-5 sm:mt-6 flex justify-center">
              <Button
                onClick={onClose}
                type="button"
                variant='primary'
                className="inline-flex justify-center item-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm"
              >
                {close}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
