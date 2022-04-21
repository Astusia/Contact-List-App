import { gql } from "@apollo/client";

export const listContacts = gql`
  query ListContacts {
    contact_aggregate(order_by: { name: asc }) {
      nodes {
        dob
        email
        id
        image
        name
        phone
      }
    }
  }
`;
