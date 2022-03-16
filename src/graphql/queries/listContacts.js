import { gql } from "@apollo/client";

export const listContacts = gql`
  query MyQuery {
    contact {
      dob
      email
      id
      image
      name
      phone
    }
  }
`;
