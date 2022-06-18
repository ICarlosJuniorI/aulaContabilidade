import styled from 'styled-components';

export const Container = styled.div`
  width: 500px;
  height: 500px;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-top: 100px;
  border-radius: 10px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;

  button + button {
    margin-bottom: 50px;
  }
`;

export const MainTitle = styled.h1`
  font-size: 30px;
  font-weight: bold;
  font-family: Arial, sans-serif;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  /* margin-top: 50px; */
`;

export const InputDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  /* flex-direction: row;
  margin-top: 100px; */
`;

export const RadioDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 10px;
`;

export const Input = styled.input`
  width: 300px;
  height: 30px;
  border: 1px solid black;
  border-radius: 5px;
`;

export const InputRadio = styled.input`
  width: 15px;
  height: 15px;
`;

export const Label = styled.label`
  font-family: Arial, Helvetica, sans-serif;
  font-size: 20px;
  font-weight: bold;
  margin-right: 10px;
`;