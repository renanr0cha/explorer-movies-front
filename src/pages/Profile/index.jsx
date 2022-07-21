import { BiArrowBack } from "react-icons/bi"
import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from "react-icons/fi";

import { ButtonText } from "../../components/ButtonText"
import { Button } from "../../components/Button"

import { Input } from "../../components/Input"

import { Container, Form, Avatar } from "./styles"

export function Profile() {
	return(
    <Container>
			<header>
				<ButtonText to="/" title="Voltar" icon={BiArrowBack}/>
			</header>
			<Form>
        <Avatar>
          <img
            src="https://github.com/renanr0cha.png"
            alt="Foto do usuário"
          />

          <label htmlFor="avatar">
            <FiCamera />

            <input
              type="file"
              id="avatar"
            />
          </label>
        </Avatar>
        <Input
					value="Renan Rocha"
          placeholder="Nome"
          type="text"
          icon={FiUser}
        />

        <Input
					value="renan@email.com"
          placeholder="E-mail"
          type="text"
          icon={FiMail}
        />

        <Input
          placeholder="Senha atual"
          type="password"
          icon={FiLock}
        />

        <Input
          placeholder="Nova senha"
          type="password"
          icon={FiLock}
        />

 				<Button title="Salvar"/>
      </Form>
    </Container>
	)
}