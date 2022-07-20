import {  BiArrowBack, BiTime } from "react-icons/bi"
import { HiStar, HiOutlineStar } from "react-icons/hi"

import { Container, Content } from "./styles"


import { ButtonText } from "../../components/ButtonText"

import { Header } from "../../components/Header"
import { TagChips } from "../../components/TagChips";

export function Details() {
  return(
    <Container>
      <Header />
      <header>
        <ButtonText title="Voltar" icon={BiArrowBack}/>
      </header>
      <Content>
        <div>
          <h1>Interstellar</h1>
          <div>
            <HiStar />
            <HiStar />
            <HiStar />
            <HiStar />
            <HiOutlineStar/>
          </div>
        </div>
        <div>
          <img
            src="https://github.com/renanr0cha.png"
            alt="Foto do usuário"
          />
          <span>Por Rodrigo Gonçalves</span>
          <BiTime/>
          <span>23/05/22 às 08:00</span>
        </div>
        <TagChips title="Ficção Científica"/>
      </Content>

    </Container>
  )
}