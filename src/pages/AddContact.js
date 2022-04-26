import { useMutation } from "@apollo/client";
import ContactForm from "../components/ContactForm";
import { createContact } from "../graphql/mutations/createContact";
import { v4 } from "uuid";
import { useNavigate } from "react-router-dom";
import { listContacts } from "../graphql/queries/listContacts";

export const AddContact = () => {
  const navigate = useNavigate();
  const [mutate, { loading }] = useMutation(createContact);

  return (
    <ContactForm
      handleSubmit={async (contact) => {
        await mutate({
          variables: { object: { id: v4(), ...contact } },
          refetchQueries: [listContacts],
          awaitRefetchQueries: true,
          fetchPolicy: "network-only",
        });
        navigate("/");
      }}
      buttonName={loading ? "Adding..." : "Add"}
    />
  );
};
