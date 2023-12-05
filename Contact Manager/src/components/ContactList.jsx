import React from 'react'
import ContactCard from './ContactCard'

function ContactList(props) {

  const deleteContactHandler = (id) => {
    props.getContactId(id);
  }

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        key={contact.id}
        clickHander = {deleteContactHandler}
      />
    )
  })
  return (
    <div className='ui celled list container '>
      <h2 style={{ marginTop: "20px", fontSize: "22px" }}>Contact List</h2>
      {renderContactList}
    </div>
  )
}

export default ContactList
