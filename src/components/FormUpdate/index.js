import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";

function FormUpdate() {
  function onSubmit(values, action) {
    console.log("SUBMIT", values);
  }

  function onBlurId(ev, setFieldValue) {
    const { value } = ev.target;
    const id = value;
    const baseUrl = "https://localhost:PORTA_API/";

    fetch(`${baseUrl}/employee/${id}`, {
      method: "PUT",
    })
      .then((res) => res.json())
      .then((data) => {
        setFieldValue("name", data.name);
        setFieldValue("document", data.document);
        setFieldValue("phone", data.phone);
        setFieldValue("birthDate", data.birthDate);
        setFieldValue("salary", data.salary);
      });
  }

  return (
    <>
      <h2>Atualização de Funcionário</h2>
      <Formik
        onSubmit={onSubmit}
        validateOnMount
        initialValues={{
          id: "",
          name: "",
          document: "",
          phone: "",
          birthDate: "",
          salary: "",
        }}
        render={({ isValid, setFieldValue }) => (
          <Form>
            <label htmlFor="id"> Id: </label>
            <Field
              className="id"
              name="id"
              type="number"
              onBlur={(ev) => onBlurId(ev, setFieldValue)}
            />

            <label htmlFor="name"> Nome: </label>
            <Field
              name="name"
              placeholder="Nome Completo"
              type="text"
              required
            />
            <ErrorMessage name="name" />

            <label htmlFor="document"> CPF: </label>
            <Field name="document" type="text" />
            <ErrorMessage name="document" />

            <label htmlFor="phone">Telefone</label>
            <Field name="phone" type="text" />
            <ErrorMessage name="phone" />

            <label htmlFor="birthDate"> Data de Nascimento: </label>
            <Field name="birthDate" type="date" />
            <ErrorMessage name="birthDate" />

            <label htmlFor="salary"> Salário: </label>
            <Field name="salary" type="text" />
            <ErrorMessage name="salary" />

            <button
              className="btn btn-outline-primary"
              type="submit"
              disabled={!isValid}
            >
              {" "}
              ATUALIZAR{" "}
            </button>
          </Form>
        )}
      />
    </>
  );
}

export default FormUpdate;
