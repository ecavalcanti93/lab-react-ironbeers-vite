import { Link } from "react-router-dom";
import beersImg from "../assets/beers.png";
import randomBeerImg from "../assets/random-beer.png";
import newBeerImg from "../assets/new-beer.png";
import Navbar from "../components/Navbar";

function HomePage() {
  return (
    <>
      <Navbar />
      <Link to="/beers">
        <div>
          <img className="images" src={beersImg} alt={beersImg} />
          <h1 className="text-home">All Beers</h1>
          <p className="paragraph-home">Mussum Ipsum, cacilds vidis litro abertis. In elementis mé pra quem é amistosis quis leo. Paisis, filhis, espiritis santis. Negão é teu passadis, eu sou faxa pretis. Sapien in monti palavris qui num significa nadis i pareci latim.</p>
        </div>
      </Link>
      <Link to="/random-beer">
        <div>
          <img className="images" src={randomBeerImg} alt={randomBeerImg} />
        </div>
        <div>
          <h1 className="text-home">Random Beer</h1>
          <p className="paragraph-home">Mussum Ipsum, cacilds vidis litro abertis.  Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl. Pra lá, depois divoltis porris, paradis. In elementis mé pra quem é amistosis quis leo.</p>
        </div>
      </Link>
      <Link to="/new-beer">
        <div>
          <img className="images" src={newBeerImg} alt={newBeerImg} />
          <h1 className="text-home">New Beer</h1>
          <p className="paragraph-home">Mussum Ipsum, cacilds vidis litro abertis.  Suco de cevadiss deixa as pessoas mais interessantis. Paisis, filhis, espiritis santis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Sapien in monti palavris qui num significa nadis i pareci latim.</p>
        </div>
      </Link>
    </>
  );
}

export default HomePage;
