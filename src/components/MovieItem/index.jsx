import { HiStar, HiOutlineStar } from "react-icons/hi"
import { Container } from "./styles";

export function MovieItem() {
  return(
    <Container>
      <h2>Interstellar</h2>
      <div>
        <HiStar />
        <HiStar />
        <HiStar />
        <HiStar />
        <HiOutlineStar/>
      </div>
      <p>Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu..</p>

      <div>
        <button>
          Ficção Científica
        </button>
        <button>
          Drama
        </button>
        <button>
          Família
        </button>
      </div>
    </Container>
  )
}