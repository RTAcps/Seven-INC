import Footer from "../../components/Footer";
import Formulario from "../../components/FormAdd/Index";
import NavBar from "../../components/NavBar";

function Employee() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">Funcionários</h1>
        <div className="py-3">
          <h2 className="text-primary">Listagem</h2>
          <Formulario />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Employee;
