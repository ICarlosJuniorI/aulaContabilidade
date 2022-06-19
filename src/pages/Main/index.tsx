import { useEffect, useState } from "react";

import { accountCollectionRef, companyCollectionRef, db } from "../../firebase"
import { Button } from "../../components/Button";
import { ButtonSubmit } from "../../components/ButtonSubmit";
import { Modal } from "../../components/Modal";
import {
  ButtonContainer,
  Container,
  ContainerMap,
  Input,
  InputContainer,
  InputDiv,
  InputRadio,
  Label,
  MainTitle,
  RadioDiv
} from "./styles";
import { addDoc, deleteDoc, doc, getDocs } from "firebase/firestore";


export function MainPage() {
  const [showModalCompany, setShowModalCompany] = useState(false);
  const [showModalAccount, setShowModalAccount] = useState(false);
  const [showModalData, setShowModalData] = useState(false);

  const [companyId, setCompanyId] = useState(0);
  const [companyName, setCompanyName] = useState('');
  const [companyDescription, setCompanyDescription] = useState('');

  const [accountId, setAccountId] = useState(0);
  const [accountType, setAccountType] = useState('');
  const [accountDescription, setAccountDescription] = useState('');

  const [companies, setCompanies]: any[] = useState([]);
  const [accounts, setAccounts]: any[] = useState([]);

  const getCompanies = async () => {
    const data = await getDocs(companyCollectionRef);
    setCompanies(data.docs.map((doc) => ({ ...doc.data(), companyId: doc.id })));
    console.log(`DATA = ${JSON.stringify(data.docs)}`)
  }

  const showCompanies = () => {
    getCompanies();
    setShowModalData(true);
  }

  const getAccounts = async () => {
    const data = await getDocs(accountCollectionRef);
    setAccounts(data.docs.map((doc) => ({ ...doc.data(), accountId: doc.id })));
  }

  //Cadastrar uma nova empresa
  const registerCompany = async () => {
    const company = await addDoc(companyCollectionRef, {
      companyId, companyName, companyDescription
    });

    companies.push(company);
    showCompanies();
    // console.log(`Empresas = ${JSON.stringify(companies)}`);
  }

  //Cadastrar uma nova conta
  const registerAccount = async () => {
    const account = await addDoc(accountCollectionRef, {
      accountId, accountDescription, accountType, companyId
    })

    accounts.push(account);
    console.log(`Contas = ${JSON.stringify(accounts)}`);

  }

  //Deletar empresa
  const deleteCompany = async (companyId: any) => {
    const company = doc(db, 'companies', companyId);
    await deleteDoc(company);
  }

  //Deletar conta
  const deleteAccount = async (accountId: any) => {
    const account = doc(db, 'accounts', accountId);
    await deleteDoc(account);
  }

  //Abrir e fechar os modais
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

  const openModalData = () => {
    setShowModalData(prevState => !prevState);
  }

  const closeModalData = () => {
    setShowModalData(prevState => !prevState);
  }

  //Handlers
  const handleCompanyId = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setCompanyId(e.currentTarget.valueAsNumber);
  }

  const handleCompanyName = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setCompanyName(e.currentTarget.value);
  }

  const handleCompanyDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setCompanyDescription(e.currentTarget.value);
  }

  const handleAccountId = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setAccountId(e.currentTarget.valueAsNumber);
  }

  const handleAccountType = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAccountType(e.target.value);
  }

  const handleAccountDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setAccountDescription(e.currentTarget.value);
  }

  const handleSubmitCompany = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    registerCompany();

    setShowModalCompany(false);
    setCompanyName('');
    setCompanyId(0);
    setCompanyDescription('');
  }

  const handleSubmitAccount = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    registerAccount();

    setShowModalAccount(false);
    setCompanyId(0);
    setAccountId(0);
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
        <Button type="button" onClick={openModalData}>
          Cadastros
        </Button>
      </ButtonContainer>

      <Modal onClick={closeModalCompany} showModal={showModalCompany} setShowModal={setShowModalCompany}>
        <InputContainer>
          <MainTitle>Dados da empresa</MainTitle>
          <InputDiv>
            Código da Empresa
            <Input
              type="number"
              // placeholder="Código da Empresa"
              min="0"
              max="99"
              value={companyId}
              onChange={handleCompanyId}
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
              onClick={handleSubmitCompany}
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
              value={companyId}
              onChange={handleCompanyId}
            />
          </InputDiv>
          <InputDiv>
            Código da conta
            <Input
              type="number"
              min="0"
              max="99"
              value={accountId}
              onChange={handleAccountId}
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
              value="S"
              checked={accountType === 'S'}
              onChange={handleAccountType}
            />
            <Label>Sintética</Label>
          </RadioDiv>
          <RadioDiv>
            <InputRadio
              type="radio"
              name="type"
              value="A"
              checked={accountType === 'A'}
              onChange={handleAccountType}
            />
            <Label>Analítica</Label>
          </RadioDiv>
          <InputDiv>
            <ButtonSubmit
              type="submit"
              onClick={handleSubmitAccount}
            >
              Confirmar
            </ButtonSubmit>
          </InputDiv>
        </InputContainer>
      </Modal>
      {/* <Modal
        onClick={closeModalData}
        showModal={showModalData}
        setShowModal={setShowModalData}
      >
      </Modal> */}
    </Container>
  );
}