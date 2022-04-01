import { useMutation, useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import { Icon } from "../components/Icon";
import { Layout } from "../components/Layout";
import { BackButton, Toolbar } from "../components/Toolbar";
import { deleteContact } from "../graphql/mutations/deleteContact";
import { getContact } from "../graphql/queries/getContact";
import styles from "./Contact.module.css";

const Loading = () => {
  return (
    <Layout>
      <Toolbar>
        <BackButton />
        <div>
          <button className={styles.buttons}>
            <Icon>edit</Icon>
          </button>
          <button className={styles.buttons}>
            <Icon>delete</Icon>
          </button>
        </div>
      </Toolbar>
      <div className={styles.info_section1}>
        <div className={styles.info_section1_avatar}>
          <div className={styles.avatarLoading}></div> {/* Loading CSS */}
        </div>
        <div className={styles.loadingName}></div> {/* Loading CSS */}
        <div className={styles.loadingBirthday}></div> {/* Loading CSS */}
      </div>
      <div className={styles.info_section2}>
        <div className={styles.info_section2_row}>
          <Icon className={styles.info_secion2_icon}>phone</Icon>{" "}
          <div>Loading phone</div>
        </div>
        <div className={styles.info_section2_row}>
          <Icon className={styles.info_secion2_icon}>email</Icon>{" "}
          <div>Loading email</div>
        </div>
      </div>
    </Layout>
  );
};

export const Contact = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(getContact, { variables: { id } });
  const navigate = useNavigate();
  const [mutate] = useMutation(deleteContact);

  if (loading) return <Loading />;

  return (
    <Layout>
      <Toolbar>
        <BackButton />
        <div>
          <button
            className={styles.buttons}
            onClick={() => navigate(`/contact/${id}/edit`)}
          >
            <Icon tooltip="Edit contact">edit</Icon>
          </button>
          <button
            className={styles.buttons}
            onClick={async () => {
              try {
                await mutate({
                  variables: { id },
                  refetchQueries: ["ListContacts"],
                });
                navigate("/");
              } catch (e) {}
            }}
          >
            <Icon tooltip="Delete contact">delete</Icon>
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
