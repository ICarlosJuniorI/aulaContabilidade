import { ButtonModal } from "./styles";

interface ButtonModalProps {
  type: string;
  onClick: (e:  React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
}

export function ButtonSubmit({ type, onClick, children }: ButtonModalProps) {
  return (
    <ButtonModal onClick={onClick}>
      {children}
    </ButtonModal>
  );
}