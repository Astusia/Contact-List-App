import { useQuery } from "@apollo/client";
import { Layout } from "../components/Layout";
import { listContacts } from "../graphql/queries/listContacts";
import { Toolbar } from "../components/Toolbar";
import { Item } from "../components/Item";
import { Icon } from "../components/Icon";
import styles from "./Home.module.css";

export const Home = () => {
  const { data, loading } = useQuery(listContacts);

  if (loading) return <div>Loading...</div>;

  return (
    <Layout>
      <Toolbar>
        <h1>Contact List</h1>
        <button>
          <Icon className={styles.toolbar_icon}>person_add</Icon>
        </button>
      </Toolbar>
      {data.contact.map((user, key) => (
        <Item key={key} user={user} />
      ))}
    </Layout>
  );
};
