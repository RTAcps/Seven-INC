import { Formik, Field, Form, ErrorMessage } from "formik";

function FormAdd() {
  function onSubmit(values, action) {
    console.log("SUBMIT", values);
  }

  return (
    <>
      <h2>Cadastro de Funcionário</h2>
      <Formik
        onSubmit={onSubmit}
        validateOnMount
        initialValues={{
          name: "",
          document: "",
          phone: "",
          birthDate: "",
          salary: "",
          createdAt: "",
        }}
        render={({ isValid }) => (
          <Form>
            <div>
              <label htmlFor="name"> Nome: </label>
              <Field
                name="name"
                placeholder="Nome Completo"
                type="text"
                required
              />
              <ErrorMessage name="name" />
            </div>
            <div>
              <label htmlFor="document"> CPF: </label>
              <Field name="document" type="text" required />
              <ErrorMessage name="document" />
            </div>
            <div>
              <label htmlFor="phone">Telefone</label>
              <Field name="phone" type="text" required />
              <ErrorMessage name="phone" />
            </div>
            <div>
              <label htmlFor="birthDate"> Data de Nascimento: </label>
              <Field name="birthDate" type="date" required />
              <ErrorMessage name="birthDate" />
            </div>
            <div>
              <label htmlFor="salary"> Salário: </label>
              <Field name="salary" type="text" required />
              <ErrorMessage name="salary" />
            </div>
            <div>
              <label htmlFor="createdAt"> Data de Contratação: </label>
              <Field name="createdAt" type="date" required />
              <ErrorMessage name="createdAt" />
            </div>

            <button
              className="btn btn-outline-primary"
              type="submit"
              disabled={!isValid}
            >
              {" "}
              CADASTRAR{" "}
            </button>
          </Form>
        )}
      />
    </>
  );
}

export default FormAdd;
