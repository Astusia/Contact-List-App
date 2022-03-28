import { gql } from "@apollo/client";

export const listContacts = gql`
  query ListContacts {
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
