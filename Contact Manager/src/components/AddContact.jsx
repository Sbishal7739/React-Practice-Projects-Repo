import React, { useState } from 'react';

function AddContact(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const add = (e) => {
    e.preventDefault();
    if (name === '' || email === '') {
      alert('Please enter the name and email');
      return;
    }
    // console.log({ name, email });
    props.addContactHandler({ name, email }); // Pass an object with name and email
    console.log({ name, email });
    setName('');
    setEmail('');
  };

  return (
    <div className='ui container center'>
      <h2>Add Contact</h2>
      <form className='ui form' onSubmit={add}>
        <div className='field'>
          <label>Name</label>
          <input
            type='text'
            name='name'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className='field'>
          <label>Email</label>
          <input
            type='text'
            name='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className='ui button blue'>Add</button>
      </form>
    </div>
  );
}

export default AddContact;
