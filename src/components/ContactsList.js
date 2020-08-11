import React from 'react';
import Contact from './Contact';

const ContactsList = ({ contacts }) => {
  return (
    <>
      <div className="mt-5">
        {
          contacts.map((contact, i) => {
            return (
              <Contact
                key={i}
                id={contact.id}
                firstname={contact.first_name}
                lastname={contact.last_name}
                email={contact.email}
                avatar={contact.avatar}
              />
            )
          })
        }
      </div>
    </>
  )
}

export default React.memo(ContactsList);