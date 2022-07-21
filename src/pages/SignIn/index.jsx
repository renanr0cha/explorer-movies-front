import { FiMail, FiLock } from "react-icons/fi"
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";
import { Container, Form, Background } from "./styles";

export function SignIn() {
  return(
    <Container>
      <Form>
        <h1>Movie Rating</h1>
        <span>Aplicação para acompanhar tudo que você assistir</span>

        <h2>Faça seu login</h2>

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

        <Button title="Entrar" />
        
        <ButtonText to="/register" title="Criar conta" />

      </Form>

      <Background />
    </Container>
  )
}