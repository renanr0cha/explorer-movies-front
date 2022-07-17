import { FiMail, FiLock, FiUser } from "react-icons/fi"
import { BiArrowBack } from "react-icons/bi"
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Container, Form, Background } from "./styles";

export function SignUp() {
  return(
    <Container>
      <Form>
        <h1>Movie Rating</h1>
        <span>Aplicação para acompanhar tudo que assistir</span>

        <h2>Crie sua conta</h2>

        <Input
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />

        <Input
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />
        <Input
          placeholder="Senha"
          type="password"
          icon={FiLock}
        />

        <Button title="Cadastrar" />
        
        <ButtonText title="Voltar para o login" icon={BiArrowBack}/>

      </Form>

      <Background />
    </Container>
  )
}