import { gql } from "@apollo/client";

export const createContact = gql`
  mutation CreateContact($object: contact_insert_input!) {
    insert_contact_one(object: $object) {
      dob
      email
      id
      image
      name
      phone
    }
  }
`;
