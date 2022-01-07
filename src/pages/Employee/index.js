import React, { useState } from "react";
import { Link } from "react-router-dom";
import { TiPlus } from "react-icons/ti";
import { MdEdit, MdDelete } from "react-icons/md";
import Footer from "../../components/Footer";
import NavBar from "../../components/NavBar";
import FormUpdate from "../../components/FormUpdate";
import FormAdd from "../../components/FormAdd";

function Employee(ev) {
  const { value } = ev.target;
  const id = value;

  const [status, setStatus] = useState({
    type: " ",
    message: " ",
  });

  const baseUrl = "https://localhost:PORTA_API/";

  const deleteEmployee = async (idEmployee) => {
    await fetch(`${baseUrl}/employee/${id}`)
      .then((res) => res.json())
      .then((responseJson) => {
        if (responseJson.erro) {
          setStatus({
            type: "error",
            message: responseJson.message,
          });
        } else {
          setStatus({
            type: "success",
            message: responseJson.message,
          });
        }
      })
      .catch((err) => {
        setStatus({
          type: "erro",
          message: err,
        });
      });
  };

  return (
    <>
      <NavBar />
      <div className="container">
        <div class="alert alert-danger" role="alert">
          {status.type === "error" ? status.message : " "}
        </div>
        <div class="alert alert-success" role="alert">
          {status.type === "success" ? status.message : " "}
        </div>
        <h1 className="text-primary py-3">Funcionários</h1>
        <div className="py-3">
          <h2 className="text-primary">Listagem</h2>
          <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nome</th>
                  <th>CPF</th>
                  <th>Telefone</th>
                  <th>Data de Nascimento</th>
                  <th>Salário</th>
                  <th>Data de Contratação</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>1</th>
                  <th>Feodor Pheby</th>
                  <th>123.456.789-10</th>
                  <th>(68) 96458-6589</th>
                  <th>20/01/1999</th>
                  <th>2401.69</th>
                  <th>31/12/2020</th>
                  <th>
                    <Link
                      className="btn btn-outline-primary btn-sm"
                      to="/employee/{id}"
                    >
                      <TiPlus>
                        <FormAdd />
                      </TiPlus>
                    </Link>
                    <Link
                      className="btn btn-outline-success btn-sm"
                      to="/employee/:id"
                    >
                      <MdEdit>
                        <FormUpdate />
                      </MdEdit>
                    </Link>
                    <Link
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => deleteEmployee(id)}
                    >
                      <MdDelete />
                    </Link>
                  </th>
                </tr>
                <tr>
                  <th>2</th>
                  <th>Irwinn Pridmore</th>
                  <th>231.564.897-15</th>
                  <th>(18) 99458-9589</th>
                  <th>10/07/1989</th>
                  <th>2347.24</th>
                  <th>25/08/2020</th>
                  <th>
                    <Link
                      className="btn btn-outline-primary btn-sm"
                      to="/employee/:id"
                    >
                      <TiPlus>
                        <FormAdd />
                      </TiPlus>
                    </Link>
                    <Link
                      className="btn btn-outline-success btn-sm"
                      to="/employee/:id"
                    >
                      <MdEdit>
                        <FormUpdate />
                      </MdEdit>
                    </Link>
                    <Link
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => deleteEmployee(id)}
                    >
                      <MdDelete />
                    </Link>
                  </th>
                </tr>
                <tr>
                  <th>3</th>
                  <th>Cedric Ormes</th>
                  <th>321.654.987-20</th>
                  <th>(28) 97458-7589</th>
                  <th>20/01/1999</th>
                  <th>12018.66</th>
                  <th>31/12/2020</th>
                  <th>
                    <Link
                      className="btn btn-outline-primary btn-sm"
                      to="/employee/:id"
                    >
                      <TiPlus>
                        <FormAdd />
                      </TiPlus>
                    </Link>
                    <Link
                      className="btn btn-outline-success btn-sm"
                      to="/employee/:id"
                    >
                      <MdEdit>
                        <FormUpdate />
                      </MdEdit>
                    </Link>
                    <Link
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => deleteEmployee(id)}
                    >
                      <MdDelete />
                    </Link>
                  </th>
                </tr>
                <tr>
                  <th>4</th>
                  <th>Reina Borth</th>
                  <th>213.546.87-25</th>
                  <th>(38) 93458-3589</th>
                  <th>20/01/1999</th>
                  <th>6064.27</th>
                  <th>31/12/2020</th>
                  <th>
                    <Link
                      className="btn btn-outline-primary btn-sm"
                      to="/employee/:id"
                    >
                      <TiPlus>
                        <FormAdd />
                      </TiPlus>
                    </Link>
                    <Link
                      className="btn btn-outline-success btn-sm"
                      to="/employee/:id"
                    >
                      <MdEdit>
                        <FormUpdate />
                      </MdEdit>
                    </Link>
                    <Link
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => deleteEmployee(id)}
                    >
                      <MdDelete />
                    </Link>
                  </th>
                </tr>
                <tr>
                  <th>5</th>
                  <th>Gwenny Burnhill</th>
                  <th>132.465.798-30</th>
                  <th>(48) 95458-5589</th>
                  <th>20/01/1999</th>
                  <th>9942.83</th>
                  <th>31/12/2020</th>
                  <th>
                    <Link
                      className="btn btn-outline-primary btn-sm"
                      to="/employee/:id"
                    >
                      <TiPlus>
                        <FormAdd />
                      </TiPlus>
                    </Link>
                    <Link
                      className="btn btn-outline-success btn-sm"
                      to="/employee/:id"
                    >
                      <MdEdit>
                        <FormUpdate />
                      </MdEdit>
                    </Link>
                    <Link
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => deleteEmployee(id)}
                    >
                      <MdDelete />
                    </Link>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Employee;
