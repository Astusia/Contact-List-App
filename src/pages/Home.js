import { useQuery } from "@apollo/client";
import { listContacts } from "../graphql/queries/listContacts";

export const Home = () => {
  const { data, loading } = useQuery(listContacts);

  console.log(data);

  if (loading) return <div>Loading...</div>;

  return <div>Hello World!</div>;
};
