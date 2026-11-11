import React from 'react';
import { X, Info } from 'lucide-react';

interface PlaceholderModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
}

export const PlaceholderModal: React.FC<PlaceholderModalProps> = ({
  isOpen,
  onClose,
  title,
  message,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-md rounded-3xl border border-gray-800 bg-neutral-950 p-6 sm:p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-white/60 hover:text-white p-1 rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="w-12 h-12 rounded-2xl bg-[#64CEFB]/10 border border-[#64CEFB]/20 flex items-center justify-center mb-4 text-[#64CEFB]">
          <Info className="w-6 h-6" />
        </div>

        <h3 className="text-xl font-medium text-white mb-2">{title}</h3>
        <p className="text-white/70 text-sm leading-relaxed mb-6">{message}</p>

        <button
          onClick={onClose}
          className="w-full py-3 px-4 rounded-full bg-white text-black font-medium text-sm hover:bg-neutral-200 transition-colors"
        >
          Understood
        </button>
      </div>
    </div>
  );
};

export default PlaceholderModal;

