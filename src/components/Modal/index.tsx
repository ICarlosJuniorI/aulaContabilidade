import { Background, CloseButton, CloseImg, ModalContainer, ModalWrapper } from "./styles";

interface ModalProps {
  showModal: boolean;
  setShowModal?: (modal: boolean) => void;
  onClick: () => void;
  children: React.ReactNode
}

export function Modal({ showModal, setShowModal, onClick, children }: ModalProps) {
  return (
    <ModalContainer>
      {showModal ? (
        <Background>
          <ModalWrapper>
            <CloseButton onClick={onClick}>
              <CloseImg />
            </CloseButton>
            {children}
          </ModalWrapper>
        </Background>
      ) : null}
    </ModalContainer>
  );
}