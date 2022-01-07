import axios from "axios";
import { useEffect, useState } from "react";
import { EmployeePage } from "../../types/employee";
import { BASE_URL } from "../../utils/requests";
import { Link } from "react-router-dom";
import { TiPlus } from "react-icons/ti";
import { MdEdit, MdDelete } from "react-icons/md";
import FormUpdate from "../FormUpdate";
import FormAdd from "../FormAdd";
import Pagination from "../Pagination";

function DataTable(ev) {
  const { value } = ev.target;
  const id = value;

  const [status, setStatus] = useState({
    type: " ",
    message: " ",
  });

  const deleteEmployee = async (idEmployee) => {
    await fetch(`${BASE_URL}/employee/${id}`)
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
  const [activePage, setActivePage] = useState(0);
  const [page, setPage] = useState<EmployeePage>({
    first: true,
    last: true,
    number: 0,
    totalElements: 0,
    totalPages: 0,
  });

  useEffect(() => {
    axios.get(`${BASE_URL}/employee`).then((response) => {
      setPage(response.data);
    });
  }, [activePage]);

  const changePage = (index: number) => setActivePage(index);

  return (
    <>
      <Pagination page={page} onPageChange={changePage} />
      <div className="container">
        <div className="alert alert-danger" role="alert">
          {status.type === "error" ? status.message : " "}
        </div>
        <div className="alert alert-success" role="alert">
          {status.type === "success" ? status.message : " "}
        </div>
        <div className="py-3">
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
                {page.content?.map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.document}</td>
                    <td>{item.phone}</td>
                    <td>{item.birthDate}</td>
                    <td>{item.salary}</td>
                    <td>{item.createdAt}</td>
                    <td>
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
                        to={""}
                      >
                        <MdDelete />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default DataTable;
