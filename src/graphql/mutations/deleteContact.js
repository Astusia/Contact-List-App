import { gql } from "@apollo/client";

export const deleteContact = gql`
  mutation DeleteContact($id: uuid!) {
    delete_contact_by_pk(id: $id) {
      id
    }
  }
`;
