import React from "react";

const Contacts = ({contacts, id}) => {
    return (
        <section>
            <h2>Contacts</h2>
            <ul>
                {contacts.map(contact => {
                    return(
                        <li>{contact}</li>
                    )
                })}
            </ul>
        </section>
    )
}

export default Contacts;