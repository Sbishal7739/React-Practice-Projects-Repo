import React from 'react'
import user from "../images/blank-profile-picture-973460_1280.png"

function ContactCard(props) {
  const {id, name, email} = props.contact;
  console.log(id, name, email);
  return (
    <div>
      <div className='item' key={id} style={{ marginBottom: '15px' }}>
        <img className='ui avatar image' src={user} alt="" />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div className="content">
            <div className="header">{name}</div>
            <div>{email}</div>
          </div>
          <i className='alternate outline icon trash' style={{color:"red", cursor:"pointer"}} onClick={()=>{props.clickHander(id)}}></i>
        </div>
      </div>
    </div>
  )
}

export default ContactCard
