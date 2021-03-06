import { useReducer } from "react";
import styles from "./ContactForm.module.css";
import { Input } from "./Input";
import { Layout } from "./Layout";
import { BackButton, Toolbar } from "./Toolbar";

const initial = {
  image: "",
  dob: "",
  email: "",
  name: "",
  phone: "",
  notes: "",
};

const ContactForm = ({ initialValues = initial, handleSubmit, buttonName }) => {
  const [contact, setContact] = useReducer(
    (a, b) => ({ ...a, ...b }),
    initialValues
  );

  const handleChange = (event) => {
    setContact({ [event.target.name]: event.target.value });
  };

  return (
    <Layout>
      <Toolbar>
        <BackButton />
      </Toolbar>
      <form
        className={styles.form}
        onSubmit={(event) => {
          event.preventDefault();
          handleSubmit(contact);
        }}
      >
        <Input
          onChange={handleChange}
          name="image"
          value={contact.image}
          label="Image URL:"
          placeholder="https://..."
        />
        <Input
          onChange={handleChange}
          name="name"
          value={contact.name}
          label="Full Name:"
          placeholder="Name Surname"
        />
        <Input
          onChange={handleChange}
          name="dob"
          value={contact.dob}
          label="Date of Birth:"
          placeholder="dd/mm/yyyy"
        />
        <Input
          onChange={handleChange}
          name="phone"
          value={contact.phone}
          label="Phone:"
          placeholder="01002000123"
        />
        <Input
          onChange={handleChange}
          name="email"
          value={contact.email}
          label="Email:"
          placeholder="email@gmail.com"
        />

        <div className={styles.textarea}>
          <label>Notes:</label>
          <textarea
            name="notes"
            value={contact.notes ?? ""}
            onChange={handleChange}
          />
        </div>

        <button className={styles.add_button} type="submit">
          {buttonName}
        </button>
      </form>
    </Layout>
  );
};

export default ContactForm;
