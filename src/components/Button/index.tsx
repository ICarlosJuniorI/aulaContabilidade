import { ButtonModal } from "./styles";

interface ButtonModalProps {
  type: string;
  onClick: () => void
  children: React.ReactNode;
  color?: string;
}

export function Button({ type, onClick, color, children }: ButtonModalProps) {
  return (
    <ButtonModal onClick={onClick} color={color}>
      {children}
    </ButtonModal>
  );
}