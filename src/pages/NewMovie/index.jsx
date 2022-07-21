import { Container, Form } from "./styles";

import { BiArrowBack } from "react-icons/bi"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";
import { Button } from "../../components/Button";



export function NewMovie() {
  return(
    <Container>
      <Header />
      <header>
        <ButtonText to="/" title="Voltar" icon={BiArrowBack}/>
        <h1>Novo filme</h1>
      </header>
      <Form>
        <div>
          <Input placeholder="Título" />
          <Input placeholder="Sua nota (de 0 a 5)" />
        </div>
        <Textarea placeholder="Observações" />
        
        <h3>Marcadores</h3>
        <div className="tag-wrapper">
          <Tag value="Drama"/>
          <Tag isNew placeholder="Nova tag"/>
        </div>
        <div>
          <Button title="Excluir filme" />
          <Button title="Salvar alterações" />
        </div>
      </Form>

    </Container>
  )
}