import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

function Home() {
  return (
    <>
      <NavBar />
      <div className="container">
        <div className="jumbotron">
          <h1 className="display-4">Seven INC</h1>
          <p className="lead">
            Sistema de Adição, Atualização e Remoção de Funcionários
          </p>
          <hr />
          <p>
            Esta aplicação consiste em adicionar, atualizar e remover
            funcionários.
          </p>

          <Link className="btn btn-outline-primary btn-lg" to="/employee">
            Acessar Lista de Funcionários
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
