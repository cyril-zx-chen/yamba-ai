'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { FiUpload, FiEye } from 'react-icons/fi';

interface ButtonTemplateProps {
  icon: React.ReactNode;
  text: string;
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const ButtonTemplate = ({
  icon,
  text,
  onClick,
  disabled = false,
  className = '',
  type = 'button',
}: ButtonTemplateProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`flex-1 flex flex-col items-center justify-center px-4 py-3 rounded-lg shadow-lg tracking-wide transition-colors ${className}`}
    >
      {icon}
      <span className="mt-1 text-sm leading-normal">{text}</span>
    </button>
  );
};

export default function ImageUploadPage() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click(); // Programmatically click the hidden input
  };

  const uploadIcon = <FiUpload className="w-8 h-8" />;
  const evaluateIcon = <FiEye className="w-8 h-8" />;

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Image Upload</h1>
          <p className="text-gray-600">Upload an image to evaluate</p>
        </div>

        <div className="flex flex-col items-center space-y-6">
          <div className="relative w-full aspect-square max-w-md bg-gray-100 rounded-lg border-2 border-dashed border-gray-300 flex items-center justify-center">
            {selectedImage ? (
              <Image
                src={selectedImage}
                alt="Uploaded image"
                fill
                className="object-contain rounded-lg p-2"
                priority
              />
            ) : (
              <p className="text-gray-400">Preview will appear here</p>
            )}
          </div>

          <div className="w-full flex gap-4">
            <label className="flex-1 w-full">
              <input
                ref={fileInputRef}
                type="file"
                className="hidden"
                accept="image/*"
                onChange={handleImageUpload}
              />
              <ButtonTemplate
                icon={uploadIcon}
                text="Select an image"
                onClick={handleUploadClick}
                className="w-full bg-blue-400 border border-blue-500 hover:bg-blue-500 hover:text-white cursor-pointer"
              />
            </label>

            <ButtonTemplate
              icon={evaluateIcon}
              text="Evaluate"
              disabled={!selectedImage}
              className="w-full bg-green-500 text-white hover:bg-green-600"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
