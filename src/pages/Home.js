import { useQuery } from "@apollo/client";
import { Layout } from "../components/Layout";
import { listContacts } from "../graphql/queries/listContacts";
import { Toolbar } from "../components/Toolbar";
import { Item } from "../components/Item";

export const Home = () => {
  const { data, loading } = useQuery(listContacts);

  if (loading) return <div>Loading...</div>;

  console.log(data.contact);
  return (
    <Layout>
      <Toolbar>
        <h1>Contact List</h1>
        <button>New Contact</button>
      </Toolbar>
      {data.contact.map((user, key) => (
        <Item key={key} user={user} />
      ))}
    </Layout>
  );
};
