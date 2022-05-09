import styles from "./styles.module.scss";
import { AiOutlineStar } from "react-icons/ai";
import { FaUserAlt } from "react-icons/fa";

export const CardContact = ({contact, favoriteMain}) => {
  const name = contact.name || "Contatto 1";
  const username = contact.username || "Username Contatto 1";
  const email = contact.email || "Email Contatto 1";
  const phone = contact.phone || "1234567890";

  

  return (
    <div className={styles.card_contact} id={contact.id}>
      <div className={styles.all}>
        <div className={styles.img_container}>
          <FaUserAlt size="2rem"/>
        </div>
        <div className={styles.info}>
          <h4 className={styles.item_name}>{name}</h4>
          {/* <p className={styles.item_username}>{username}</p> */}
          <p className={styles.item_mail}>{email}</p>
          <p className={styles.item_number}>{phone}</p>
        </div>
        <div className={styles.star_container}>
          <p
            className={styles.addstar}
            onClick={(e) => favoriteMain(contact)}
          >
            <AiOutlineStar size="1.2rem" />
          </p>
        </div>
      </div>
    </div>
  );
};
//
