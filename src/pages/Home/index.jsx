import { BiPlus } from "react-icons/bi"
import { Container, Content } from "./styles"
import { Header } from "../../components/Header"
import { MovieItem } from "../../components/MovieItem"
import { Button } from "../../components/Button"

export function Home() {
  return (
    <Container>
      <Header />
      <header>
        <h1>Meus filmes</h1>
        <Button title="Adicionar filme" icon={BiPlus}/>
      </header>
      <Content>
        <MovieItem />
        <MovieItem />
        <MovieItem />
        <MovieItem />
        <MovieItem />
        <MovieItem />
      </Content>
      
    </Container>
  )
}