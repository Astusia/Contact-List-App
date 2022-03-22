import { useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import { Icon } from "../components/Icon";
import { Layout } from "../components/Layout";
import { BackButton, Toolbar } from "../components/Toolbar";
import { getContact } from "../graphql/queries/getContact";
import styles from "./Contact.module.css";

export const Contact = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(getContact, { variables: { id } });
  const navigate = useNavigate();

  if (loading) return <div>Loading...</div>;

  console.log(data);

  return (
    <Layout>
      <Toolbar>
        <BackButton />
        <div>
          <button
            className={styles.buttons}
            onClick={() => navigate(`/contact/${id}/edit`)}
          >
            <Icon>edit</Icon>
          </button>
          <button
            className={styles.buttons}
            // onClick={() => setOpen(true)}
            // className={styles.info_back_button}
          >
            <Icon>delete</Icon>
          </button>
        </div>
      </Toolbar>
    </Layout>
  );
};
