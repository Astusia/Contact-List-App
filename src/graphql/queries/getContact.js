import { gql } from "@apollo/client";

export const getContact = gql`
  query GetContact($id: uuid!) {
    contact_by_pk(id: $id) {
      dob
      email
      id
      image
      name
      phone
    }
  }
`;
