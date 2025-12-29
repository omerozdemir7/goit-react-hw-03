import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from './ContactForm.module.css';

const ContactForm = ({ onAdd }) => {
  const initialValues = {
    name: '',
    number: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Must be at least 3 characters')
      .max(50, 'Must be 50 characters or less')
      .required('Required'),
    number: Yup.string()
      .min(3, 'Must be at least 3 characters')
      .max(50, 'Must be 50 characters or less')
      .required('Required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    onAdd(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <div className={styles.fieldGroup}>
          <label htmlFor="name" className={styles.label}>
            Name
          </label>
          <Field
            type="text"
            name="name"
            id="name"
            className={styles.input}
            placeholder="Enter name"
          />
          <ErrorMessage name="name" component="span" className={styles.error} />
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor="number" className={styles.label}>
            Number
          </label>
          <Field
            type="text"
            name="number"
            id="number"
            className={styles.input}
            placeholder="Enter phone number"
          />
          <ErrorMessage
            name="number"
            component="span"
            className={styles.error}
          />
        </div>

        <button type="submit" className={styles.button}>
          Add Contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
