import { useQuery } from "@apollo/client";
import { Layout } from "../components/Layout";
import { listContacts } from "../graphql/queries/listContacts";
import { Toolbar } from "../components/Toolbar";
import { Item } from "../components/Item";
import { Icon } from "../components/Icon";
import styles from "./Home.module.css";
import { useNavigate } from "react-router-dom";
import { AnimatedLoader } from "../components/AnimatedLoader";

const Loading = () => {
  return (
    <>
      {/* Smart way to repeat multiple things
      {Array(7)
        .fill({})
        .map((_, index) => (
          <AnimatedLoader
            key={index}
            height={60}
            width={"100%"}
            margin={"0 0 20px 0"}
          />
        ))} */}

      <AnimatedLoader height={60} width={"100%"} margin={"0 0 20px 0"} />
      <AnimatedLoader height={60} width={"100%"} margin={"0 0 20px 0"} />
      <AnimatedLoader height={60} width={"100%"} margin={"0 0 20px 0"} />
      <AnimatedLoader height={60} width={"100%"} margin={"0 0 20px 0"} />
      <AnimatedLoader height={60} width={"100%"} margin={"0 0 20px 0"} />
      <AnimatedLoader height={60} width={"100%"} margin={"0 0 20px 0"} />
      <AnimatedLoader height={60} width={"100%"} margin={"0 0 20px 0"} />
      <AnimatedLoader height={60} width={"100%"} margin={"0 0 20px 0"} />
    </>
  );
};

export const Home = () => {
  const { data, loading } = useQuery(listContacts);
  const navigate = useNavigate();

  return (
    <Layout>
      <Toolbar>
        <h1>Contact List</h1>
        <button onClick={() => navigate("/contact/add")}>
          <Icon tooltip="Add new contact" className={styles.toolbar_icon}>
            person_add
          </Icon>
        </button>
      </Toolbar>
      {loading ? (
        <Loading />
      ) : (
        data.contact_aggregate.nodes.map((user, key) => (
          <Item key={key} user={user} />
        ))
      )}
    </Layout>
  );
};
