import React from "react";
import { Formik, Field, Form } from "formik";
import { cpfMask } from "./components/cpfMask";
import { phoneMask } from "./components/phoneMask";
import NumberFormat from "react-number-format";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      documentId: "",
      phone: "",
    };
    this.handlechangeCpf = this.handlechangeCpf.bind(this);
    this.handlechangePhone = this.handlechangePhone.bind(this);
  }

  handlechangeCpf(e) {
    this.setState({ documentId: cpfMask(e.target.value) });
  }

  handlechangePhone(e) {
    this.setState({ phone: phoneMask(e.target.value) });
  }

  render() {
    const { documentId, phone } = this.state;
    return (
      <div>
        <h1>Cadastro de Funcionário</h1>
        <Formik
          initialValues={{
            id: "",
            name: "",
            document: "",
            phone: "",
            bithDate: "",
            salary: "",
            createdAt: "",
          }}
          onSubmit={async (values) => {
            await new Promise((r) => setTimeout(r, 500));
            alert(JSON.stringify(values, null, 2));
          }}
        >
          <Form>
            <label htmlFor="id"> Id: </label>
            <Field id="id" name="id" placeholder="Id" type="number" required />

            <label htmlFor="name"> Nome: </label>
            <Field
              id="name"
              name="name"
              placeholder="Nome Completo"
              type="text"
              required
            />

            <label htmlFor="document"> CPF: </label>
            <Field
              maxLength="14"
              id="document"
              name="document"
              value={documentId}
              onChange={this.handlechangeCpf}
              placeholder="999.999.999-99"
              required
            />

            <label htmlFor="phone">Telefone</label>
            <Field
              id="phone"
              name="phone"
              value={phone}
              onChange={this.handlechangePhone}
              placeholder="(99)99999-9999"
              type="phone"
              required
            />

            <label htmlFor="bithDate"> Data de Nascimento: </label>
            <Field id="bithDate" name="bithDate" type="date" />

            <label htmlFor="salary"> Salário: </label>
            <NumberFormat
              value={99999999}
              thousandSeparator={true}
              prefix={"R$ "}
              required
            />

            <label htmlFor="createdAt"> Data de Contratação: </label>
            <Field id="createdAt" name="createdAt" type="date" />

            <button type="submit"> Cadastrar </button>
          </Form>
        </Formik>
      </div>
    );
  }
}

export default App;
