import React, { useRef } from "react";
import { default as ReactModal } from "react-modal";
import { modalSettings } from "./settings";
import classNames from "classnames";
import { IconModalClose } from "shared/icons/common-icons";
import Button from "../Button";

ReactModal.setAppElement("#__next");

interface ModalProps {
  open: boolean;
  onClose: () => void;
  onCancel: () => void;
  onSubmit: () => void;
  onAfterClose?: () => void;
  children?: any;
  size?: "sm" | "md" | "lg" | "xlg";
  configs?: Partial<typeof modalSettings>;
  fetching?: boolean;
  bodyOpenClassName?: string;
}

const Modal = ({
  open,
  onClose,
  onSubmit,
  onCancel,
  children,
  size = "md",
  configs,
  onAfterClose,
  fetching,
  bodyOpenClassName,
}: ModalProps) => {
  const modalBody: any = useRef();
  const modalConfigs = { ...modalSettings, ...configs };

  const footerClasses = classNames("modal-footer", {
    "flex-row-reverse": modalConfigs.buttonsReverse,
    "justify-content-center": modalConfigs.footerAlignment === "center",
    "justify-content-end": modalConfigs.footerAlignment === "right",
  });

  const titleClasses = classNames("mb-0 text-center", {
    "text-warning": modalConfigs.titleWarning,
  });

  const handleClose = () => {
    if (fetching) return;
    const target = modalBody.current.parentNode.parentNode;
    const duration =
      parseFloat(getComputedStyle(target)["transitionDuration"]) * 1000;
    target.style.opacity = 0;
    setTimeout(onClose, duration);
    onAfterClose && onAfterClose();
  };

  const handleCancel = () => {
    if (onCancel) {
      onCancel();
    } else {
      handleClose();
    }
  };

  const TitleTag = size === "xlg" ? "h5" : "h6";

  return (
    <ReactModal
      shouldCloseOnOverlayClick={modalConfigs.shouldCloseOnOverlayClick}
      isOpen={open}
      closeTimeoutMS={500}
      onRequestClose={handleClose}
      className={`ReactModal__Content-${size}`}
      bodyOpenClassName={bodyOpenClassName}
    >
      {!modalConfigs.hideCloseBtn && (
        <Button
          className="modal-close z-index-11 px-0"
          onClick={handleClose}
          icon={IconModalClose}
        />
      )}
      <div className="modal-container">
        {!modalConfigs.hideHeader && (
          <div className="modal-header d-flex flex-column align-items-start">
            {!modalConfigs.hideTitle && (
              <TitleTag className={titleClasses}>{modalConfigs.title}</TitleTag>
            )}
            {!modalConfigs.hideSubTitle && (
              <p className={modalConfigs.subTitleClasses}>{modalConfigs.subTitle}</p>
            )}
          </div>
        )}
        <div ref={modalBody} className="modal-body">
          {children}
        </div>
        {!modalConfigs.hideFooter && (
          <div className={footerClasses}>
            {!modalConfigs.hideCancelBtn && (
              <Button
                appearance={modalConfigs.cancelBtnClass}
                onClick={handleCancel}
                disabled={modalConfigs.cancelBtnDisabled}
                icon={modalConfigs.cancelBtnIcon}
                iconPosition={modalConfigs.cancelBtnIconPosition}
              >
                {modalConfigs.cancelBtnText}
              </Button>
            )}
            {!modalConfigs.hideSubmitBtn && (
              <Button
                appearance={modalConfigs.submitBtnClass}
                onClick={onSubmit}
                disabled={modalConfigs.submitBtnDisabled}
                icon={modalConfigs.submitBtnIcon}
                iconPosition={modalConfigs.submitBtnIconPosition}
                className={modalConfigs.submitBtnClassName}
              >
                {modalConfigs.submitBtnText}
              </Button>
            )}
          </div>
        )}
      </div>
    </ReactModal>
  );
};

export default Modal;
