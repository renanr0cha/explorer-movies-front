import { Container, Form, Profile } from "./styles"

import { Input } from "../Input"

export function Header() {
  return(
    <Container>
      <h1>Movie Rating</h1>

      <Form>
        <Input type="text" placeholder="Pesquisar pelo título"/>

      </Form>

        <Profile to="/profile">
          <div>
            <strong>Renan Rocha</strong>
            <span>sair</span>
          </div>
          <img
            src="https://github.com/renanr0cha.png"
            alt="Foto do usuário"
          />
        </Profile>
    </Container>
  )
}