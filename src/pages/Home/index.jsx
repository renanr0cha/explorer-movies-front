import { BiPlus } from "react-icons/bi"
import { Container, Content } from "./styles"
import { Header } from "../../components/Header"
import { MovieItem } from "../../components/MovieItem"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom"

export function Home() {
  return (
    <Container>
      <Header />
      <header>
        <h1>Meus filmes</h1>
        <Link to="/newmovie">
          <Button title="Adicionar filme" icon={BiPlus}/>
        </Link>
      </header>
      <Content>
        <Link to="/details/24">
          <MovieItem />
        </Link>
        <Link to="/details/24">
          <MovieItem />
        </Link>
        <Link to="/details/24">
          <MovieItem />
        </Link>
        <Link to="/details/24">
          <MovieItem />
        </Link>
      
      </Content>
      
    </Container>
  )
}