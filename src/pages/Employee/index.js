import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import { DataTable } from "../../components/DataTable";

function Employee(ev) {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">Funcionários</h1>
        <div className="py-3">
          <h2 className="text-primary">Listagem</h2>
        </div>
        <DataTable />
        <Footer />
      </div>
    </>
  );
}

export default Employee;
