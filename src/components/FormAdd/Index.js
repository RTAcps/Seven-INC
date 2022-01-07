import React from "react";
import { Formik, Field, Form } from "formik";

function Formulario() {
  function onSubmit(values, action) {
    console.log("SUBMIT", values);
  }

  function validate(values) {
    const errors = {};
    if (!values.name) {
      errors.name = "Todos os campos são obrigatórios!";
    }
    return errors;
  }

  return (
    <>
      <h2>Cadastro de Funcionário</h2>
      <Formik
        onSubmit={onSubmit}
        validate={validate}
        validateOnMount
        initialValues={{
          id: "",
          name: "",
          document: "",
          phone: "",
          bithDate: "",
          salary: "",
          createdAt: "",
        }}
        render={({ values }) => (
          <Form>
            <label htmlFor="id"> Id: </label>
            <Field className="id" name="id" type="number" required />

            <label htmlFor="name"> Nome: </label>
            <Field
              name="name"
              placeholder="Nome Completo"
              type="text"
              required
            />

            <label htmlFor="document"> CPF: </label>
            <Field maxLength="14" name="document" type="text" required />

            <label htmlFor="phone">Telefone</label>
            <Field name="phone" type="text" required />

            <label htmlFor="bithDate"> Data de Nascimento: </label>
            <Field name="bithDate" type="date" required />

            <label htmlFor="salary"> Salário: </label>
            <Field name="salary" type="text" required />

            <label htmlFor="createdAt"> Data de Contratação: </label>
            <Field name="createdAt" type="date" required />

            <button className="btn btn-outline-primary" type="submit">
              {" "}
              CADASTRAR{" "}
            </button>
          </Form>
        )}
      />
    </>
  );
}

export default Formulario;
