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

  console.log(data.contact_by_pk);

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
      <div className={styles.info_section1}>
        <div className={styles.info_section1_avatar}>
          <img src={data.contact_by_pk.image} alt="avatar" />
        </div>
        <h1 className={styles.info_secion1_name}>{data.contact_by_pk.name}</h1>
        <h2>{new Date(data.contact_by_pk.dob).toLocaleDateString()}</h2>
      </div>
      <div className={styles.info_section2}>
        <div className={styles.info_section2_row}>
          <Icon className={styles.info_secion2_icon}>phone</Icon>{" "}
          {data.contact_by_pk.phone}
        </div>
        <div className={styles.info_section2_row}>
          <Icon className={styles.info_secion2_icon}>email</Icon>{" "}
          {data.contact_by_pk.email}
        </div>
      </div>
    </Layout>
  );
};
