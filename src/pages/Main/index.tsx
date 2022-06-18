import { useEffect, useState } from "react";

import { Button } from "../../components/Button";
import { ButtonSubmit } from "../../components/ButtonSubmit";
import { Modal } from "../../components/Modal";
import {
  ButtonContainer,
  Container,
  Input,
  InputContainer,
  InputDiv,
  InputRadio,
  Label,
  MainTitle,
  RadioDiv
} from "./styles";


export function MainPage() {
  const [showModalCompany, setShowModalCompany] = useState(false);
  const [showModalAccount, setShowModalAccount] = useState(false);
  const [companyNumber, setCompanyNumber] = useState(0);
  const [companyName, setCompanyName] = useState(() => {
    const saved = localStorage.getItem('companyName');
    const initialValue = saved;
    return initialValue || ' ';
  });
  const [companyDescription, setCompanyDescription] = useState('');
  const [accountNumber, setAccountNumber] = useState(0);
  const [accountType, setAccountType] = useState('');
  const [accountDescription, setAccountDescription] = useState('');

  const companies: any[] = [];
  const accounts: any[] = [];

  useEffect(() => {
    localStorage.setItem("companyName", JSON.stringify(companyName));
  }, [companyName])

  const openModalCompany = () => {
    setShowModalCompany(prevState => !prevState);
  }

  const closeModalCompany = () => {
    setShowModalCompany(prevState => !prevState);
  }

  const openModalAccount = () => {
    setShowModalAccount(prevState => !prevState);
  }

  const closeModalAccount = () => {
    setShowModalAccount(prevState => !prevState);
  }

  const handleCompanyNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setCompanyNumber(e.currentTarget.valueAsNumber);
  }

  const handleCompanyName = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setCompanyName(e.currentTarget.value);
  }

  const handleCompanyDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setCompanyDescription(e.currentTarget.value);
  }

  const handleAccountNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setAccountNumber(e.currentTarget.valueAsNumber);
  }

  const handleAccountType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccountType(e.target.value);
  }

  const handleAccountDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setAccountDescription(e.currentTarget.value);
  }

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    companies.push({
      companyName,
      companyNumber,
      companyDescription
    });

    accounts.push({
      accountNumber,
      accountDescription,
      accountType,
      companyNumber: accountNumber === 0 ? 0 : companyNumber
    });

    console.log(`COMPANY = ${JSON.stringify(companies)}`)
    console.log(`ACCOUNT = ${JSON.stringify(accounts)}`)

    setShowModalCompany(false);
    setCompanyName('');
    setCompanyNumber(0);
    setCompanyDescription('');
    setAccountNumber(0);
    setAccountDescription('');
    setAccountType('');
  }

  return (
    <Container>
      <MainTitle>CADASTRAR EMPRESA / CONTA</MainTitle>
      <ButtonContainer>
        <Button type="button" onClick={openModalCompany}>
          Nova Empresa
        </Button>
        <Button type="button" onClick={openModalAccount}>
          Nova Conta
        </Button>
      </ButtonContainer>

      <Modal onClick={closeModalCompany} showModal={showModalCompany} setShowModal={setShowModalCompany}>
        <InputContainer>
          <MainTitle>Dados da empresa</MainTitle>
          <InputDiv>
          Código da Empresa
            <Input
              type="number"
              placeholder="Código da Empresa"
              min="0"
              max="99"
              value={companyNumber}
              onChange={handleCompanyNumber}
            />
          </InputDiv>
          <InputDiv>
            <Input
              type="text"
              placeholder="Nome da Empresa"
              value={companyName}
              onChange={handleCompanyName}
            />
          </InputDiv>
          <InputDiv>
            <Input
              type="text"
              placeholder="Descrição da Empresa"
              value={companyDescription}
              onChange={handleCompanyDescription}
            />
          </InputDiv>
          <InputDiv>
            <ButtonSubmit
              type="submit"
              onClick={handleSubmit}
            >
              Confirmar
            </ButtonSubmit>
          </InputDiv>
        </InputContainer>
      </Modal>
      <Modal
        onClick={closeModalAccount}
        showModal={showModalAccount}
        setShowModal={setShowModalAccount}
      >
        <InputContainer>
          <MainTitle>Dados da conta</MainTitle>
          <InputDiv>
          Código da Empresa
            <Input
              type="number"
              min="0"
              max="99"
              value={companyNumber}
              onChange={handleCompanyNumber}
            />
          </InputDiv>
          <InputDiv>
          Código da conta
            <Input
              type="text"
              value={accountNumber}
              onChange={handleAccountNumber}
            />
          </InputDiv>
          <InputDiv>
            <Input
              type="text"
              placeholder="Descrição da Conta"
              value={accountDescription}
              onChange={handleAccountDescription}
            />
          </InputDiv>
          <RadioDiv>
            <InputRadio
              type="radio"
              name="type"
              value="sintetica"
              checked={accountType === 'sintetica'}
              onChange={handleAccountType}
            />
            <Label>Sintética</Label>
          </RadioDiv>
          <RadioDiv>
            <InputRadio
              type="radio"
              name="type"
              value="analitica"
              checked={accountType === 'analitica'}
              onChange={handleAccountType}
            />
            <Label>Analítica</Label>
          </RadioDiv>
          <InputDiv>
            <ButtonSubmit
              type="submit"
              onClick={() => { handleSubmit }}
            >
              Confirmar
            </ButtonSubmit>
          </InputDiv>
        </InputContainer>
      </Modal>
    </Container>
  );
}