import styled from 'styled-components';
import { RiCloseCircleFill } from "react-icons/ri";

export const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CloseButton = styled.button`
  width: 50px;
  height: 50px;
  border: 1px solid black;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: auto;
  border: none;
  background: #FFF;
`;

export const CloseImg = styled(RiCloseCircleFill)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;

  :hover {
    cursor: pointer;
  }
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`
  width: 500px;
  height: 500px;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #FFF;
  color: #000;
  border-radius: 10px;
  position: absolute;
  /* display: flex; */
  /* align-items: center;
  justify-content: center; */
`;