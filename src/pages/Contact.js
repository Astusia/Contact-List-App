import { useMutation, useQuery } from "@apollo/client";
import { useNavigate, useParams } from "react-router-dom";
import { Icon } from "../components/Icon";
import { Layout } from "../components/Layout";
import { BackButton, Toolbar } from "../components/Toolbar";
import { deleteContact } from "../graphql/mutations/deleteContact";
import { getContact } from "../graphql/queries/getContact";
import styles from "./Contact.module.css";
import { AnimatedLoader } from "../components/AnimatedLoader";
import Dialog from "@reach/dialog";
import { useState } from "react";
import "@reach/dialog/styles.css";
import cn from "classnames";
import { listContacts } from "../graphql/queries/listContacts";

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
          <AnimatedLoader
            width={250}
            height={250}
            margin="0 0 20px 0"
            borderRadius="50%"
          />
          {/* Loading CSS */}
        </div>
        <AnimatedLoader width={300} height={44} margin="0 0 20px 0" />
        {/* Loading CSS */}
        <AnimatedLoader width={200} height={44} margin="0 0 20px 0" />
        {/* Loading CSS */}
      </div>
      <div className={styles.info_section2}>
        <div className={styles.info_section2_row}>
          <Icon className={styles.info_secion2_icon}>phone</Icon>{" "}
          <AnimatedLoader width={"100%"} height={60} margin="0 -20px 0 0" />
          {/* Loading CSS */}
        </div>
        <div className={styles.info_section2_row}>
          <Icon className={styles.info_secion2_icon}>email</Icon>{" "}
          <AnimatedLoader width={"100%"} height={60} margin="0 -20px 0 0" />
          {/* Loading CSS */}
        </div>
        <div className={cn(styles.info_section2_row)}>
          <Icon className={styles.info_secion2_icon}>sticky_note_2</Icon>{" "}
          <AnimatedLoader width={"100%"} height={60} margin="0 -20px 0 0" />
          {/* Loading CSS */}
        </div>
      </div>
    </Layout>
  );
};

export const Contact = () => {
  const { id } = useParams();
  const { loading, data } = useQuery(getContact, { variables: { id } });
  const navigate = useNavigate();
  const [mutate, { loading: mutationLoading }] = useMutation(deleteContact);
  const [isOpen, setOpen] = useState(false);

  if (loading) return <Loading />;

  return (
    <>
      <Dialog
        isOpen={isOpen}
        onDismiss={() => setOpen(false)}
        aria-label="alert"
      >
        <div className={styles.dialog_box}>
          <p>Are you sure you want to delete this contact?</p>
          <div className={styles.dialog_box_buttons}>
            <button
              onClick={async () => {
                try {
                  await mutate({
                    variables: { id },
                    refetchQueries: [listContacts],
                    awaitRefetchQueries: true,
                  });
                  navigate("/");
                } catch (e) {}
              }}
            >
              {mutationLoading ? "Deleting..." : "Yes"}
            </button>
            <button onClick={() => setOpen(false)}>No</button>
          </div>
        </div>
      </Dialog>

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
            <button className={styles.buttons} onClick={() => setOpen(true)}>
              <Icon tooltip="Delete contact">delete</Icon>
            </button>
          </div>
        </Toolbar>
        <div className={styles.info_section1}>
          <div className={styles.info_section1_avatar}>
            <img
              src={data.contact_by_pk.image}
              alt="avatar"
              onError={({ currentTarget }) => {
                currentTarget.onerror = null; // prevents looping
                currentTarget.src = "/img_not_found.png";
              }}
            />
          </div>
          <h1 className={styles.info_secion1_name}>
            {data.contact_by_pk.name}
          </h1>
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
          {data.contact_by_pk.notes && (
            <div className={cn(styles.info_section2_row, styles.notes)}>
              <Icon className={styles.info_secion2_icon}>sticky_note_2</Icon>{" "}
              {data.contact_by_pk.notes}
            </div>
          )}
        </div>
      </Layout>
    </>
  );
};
