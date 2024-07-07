import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup";
import { nanoid } from 'nanoid'


const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Minimum number of characters - 3")
    .max(50, "Maximum number of characters - 50")
    .required("This field is required"),
  number: Yup.string()
    .min(3, "Minimum number of characters - 3")
    .max(50, "Maximum number of characters - 50")
    .required("This field is required"),
});




function ContactForm({onAdd}) {

  const handleSubmit = (values, actions) => {
    const userName = values.name.trim();
    const userNumber = values.number.trim();
    onAdd({name: userName, number: userNumber});
    actions.resetForm();
  }

  const id = nanoid();

  return (
    <div>
      <Formik
        initialValues={{name: "", number: ""}}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        {() => {
          return (
          <Form>
            <label htmlFor={`name-${id}`}>Name</label>
            <Field
             type="text"
             name="name"
             placeholder="Person Name"
             id ={`name-${id}`}
             />
             <ErrorMessage 
             name="name"/>
             <label htmlFor={`number-${id}`}>Number</label>
            <Field 
             type="text"
             name="number"
             placeholder="Person Number"
             id={`number-${id}`}
             />
             <ErrorMessage
             name="number"/>
            <button type="submit" >Add contact</button>
          </Form>
          )}
        }
      </Formik>
    </div>
  )
}

export default ContactForm