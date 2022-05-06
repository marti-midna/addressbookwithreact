import "../../src/App.css";


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

    }

    return(
        <div className="card_contact" id={props.id}>
            <h4 className="item_name">{name} ~ {username}</h4> 
            <p className="item_mail">{email}</p>
            <p className="item_number">{phone}</p>
            <p className="addstar" onClick={(event, item) => clicked(event, item)}>aggiungi ai preferiti</p>
        </div>
    )
}
//