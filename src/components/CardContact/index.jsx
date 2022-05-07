import styles from "./styles.module.scss";
import { AiOutlineStar } from "react-icons/ai";

export const CardContact = (props) => {
  const name = props.name || "Contatto 1";
  const username = props.username || "Username Contatto 1";
  const email = props.email || "Email Contatto 1";
  const phone = props.phone || "1234567890";

  const clicked = (event) => {
    // const newArr = data.map((contatto) => {
    //     console.log(contatto.id, stellina.id);
    //     if(contatto.id === parseInt(stellina.id)){
    //        return {...contatto, favorite: !contatto.favorite};
    //     }
    //     else {
    //         return contatto
    //     }
    // });
  };

  return (
    <div className={styles.card_contact} id={props.id}>
      <div className={styles.all}>
        <div className={styles.img_container}>
          <img></img>
        </div>
        <div className={styles.info}>
          <h4 className={styles.item_name}>{name}</h4>
          <p className={styles.item_username}>{username}</p>
          <p className={styles.item_mail}>{email}</p>
          <p className={styles.item_number}>{phone}</p>
        </div>
        <div className={styles.star_container}>
          <p
            className={styles.addstar}
            onClick={(event, item) => clicked(event, item)}
          >
            <AiOutlineStar size="1.2rem" />
          </p>
        </div>
      </div>
    </div>
  );
};
//
