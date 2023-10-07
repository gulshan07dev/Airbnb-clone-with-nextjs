"use client";

import { useCallback, useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../Button";

interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled: boolean;
  secondaryAction?: () => void;
  secondaryLabel?: string;
}

export default function Modal({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled,
  secondaryAction,
  secondaryLabel,
}: ModalProps) {
  const [showModal, setShowModal] = useState(isOpen);

  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
    setShowModal(false);
    setTimeout(() => {
      onClose();
    }, 300);
  }, [disabled, onClose]);

  const handleSubmit = useCallback(() => {
    if (disabled) {
      return;
    }
    onSubmit();
  }, [disabled, onSubmit]);

  const handleSecondaryOption = useCallback(() => {
    if (disabled) {
      return;
    }
    secondaryAction?.();
  }, [disabled, secondaryAction]);

  useEffect(() => {
    setShowModal(isOpen);
  }, [isOpen]);

  return !isOpen ? null : (
    <>
      <div className="flex justify-center  py-3 overflow-x-hidden fixed overflow-y-auto inset-0 z-50 bg-neutral-800/70">
        <div className="relative w-[95%] md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-fit">
          {/* form content */}
          <div
            className={`translate duration-300 h-full  ${
              showModal ? "translate-y-0" : "translate-y-full"
            }
            ${showModal ? "opacity-100" : "opacity-0"}`}
          >
            <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col py-5 w-full bg-white mb-3">
              {/* header */}
              <div className="flex items-center px-5 py-3 rounded-t justify-center relative border-b-[1px]">
                <button
                  className=" p-1 border-0  hover:opacity-70 transition absolute right-9 "
                  onClick={handleClose}
                >
                  <IoMdClose size={18} />
                </button>
                <h1 className="text-3xl text-gray-800 font-semibold">
                  {title}
                </h1>
              </div>

              {/* body */}
              <div className="relative p-6 flex-auto">{body}</div>

              {/* footer */}
              <div className="flex flex-col gap-2 px-6">
                <div className="flex flex-row items-center gap-4 w-full">
                  {secondaryLabel && (
                    <Button
                      disabled={disabled}
                      label={secondaryLabel}
                      onClick={handleSecondaryOption}
                      outline
                    />
                  )}
                  <Button
                    disabled={disabled}
                    label={actionLabel}
                    onClick={handleSubmit}
                  />
                </div>
                {footer}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
