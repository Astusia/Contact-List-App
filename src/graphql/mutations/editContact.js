import { gql } from "@apollo/client";

export const editContact = gql`
  mutation EditContact(
    $pk_columns: contact_pk_columns_input!
    $_set: contact_set_input
  ) {
    update_contact_by_pk(pk_columns: $pk_columns, _set: $_set) {
      dob
      email
      id
      image
      name
      phone
    }
  }
`;
