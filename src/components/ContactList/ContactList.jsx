// import Contact from "../Contact/Contact";
// import css from './ContactList.module.css';
// import { useSelector } from "react-redux";
// import { selectContacts, selectNameFilter } from "../../redux/selectors";

// export default function ContactList() {
//     const contacts = useSelector(selectContacts);
//     const filter = useSelector(selectNameFilter);

//     const list = contacts.filter(
//         (contact) =>
//             typeof contact.name === "string" && contact.name.toLowerCase().includes(filter.toLowerCase())
//     );

//     return (
//         <ul className={css.mainlist}>
//             {list.map((contact) => (
//                 <li key={contact.id} className={css.listitem}>
//                         <Contact contact={contact} />
//                     </li> ))}
//         </ul>
//     )
// }

import Contact from "../Contact/Contact";
import css from './ContactList.module.css';
import { useSelector } from "react-redux";
import { selectContacts, selectNameFilter } from "../../redux/selectors";

export default function ContactList() {
    const contacts = useSelector(selectContacts);
    const filter = useSelector(selectNameFilter);

    console.log("Contacts:", contacts); // Логирование значения contacts

    const list = contacts ? contacts.filter(
        (contact) =>
            typeof contact.name === "string" && contact.name.toLowerCase().includes(filter.toLowerCase())
    ) : [];

    return (
        <ul className={css.mainlist}>
            {list.map((contact) => (
                <li key={contact.id} className={css.listitem}>
                    <Contact contact={contact} />
                </li> 
            ))}
        </ul>
    )
}

