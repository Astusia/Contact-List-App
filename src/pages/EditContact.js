import { useMutation, useQuery } from "@apollo/client";
import ContactForm from "../components/ContactForm";
import { useNavigate, useParams } from "react-router-dom";
import { editContact } from "../graphql/mutations/editContact";
import { getContact } from "../graphql/queries/getContact";

export const EditContact = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { loading, data } = useQuery(getContact, { variables: { id } });
  const [mutate, { loading: updateLoading }] = useMutation(editContact);

  if (loading) return <div>Loading...</div>;

  return (
    <ContactForm
      handleSubmit={async ({ __typename, ...contact }) => {
        await mutate({
          variables: { pk_columns: { id: contact.id }, _set: contact },
          refetchQueries: ["ListContacts"],
        });
        navigate(`/contact/${id}`);
      }}
      initialValues={data.contact_by_pk}
      buttonName={updateLoading ? "Updating..." : "Update"}
    />
  );
};
