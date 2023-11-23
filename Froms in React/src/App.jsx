import { useState } from 'react'
import './App.css'

function App() {

  const [fullName, setfullName] = useState({
    fName: "",
    lName: "",
    gmail: "",
  })

  // const [fullName, setFullName] = useState()

  // const [lastName, setLastName] = useState()

  const inputEvent = (event) => {
    // setfirstName(event.target.value)
    console.log(event.target.value);
    console.log(event.target.name);

    // const value = event.target.value;
    // const name = event.target.name;

    // Optimize
    const { value, name } = event.target;


    setfullName((preValue) => {

      return {
        ...preValue,
        [name]: value
      }



      // console.log(preValue);
      // if (name === 'fName') {
      //   return {
      //     fName: value,
      //     lName: preValue.lName,
      //     gmail: preValue.gmail
      //   };
      // } else if (name === 'lName'){
      //   return {
      //     fName: preValue.fName,
      //     lName: value,
      //     gmail: preValue.gmail
      //   };
      // }
      // else if (name === 'gmail'){
      //   return {
      //     fName: preValue.fName,
      //     lName: preValue.lName,
      //     gmail: value,
      //   }
      // }

    })

  }

  // const inputEventTwo = (event) =>{
  //   setLastName(event.target.value)
  // }

  const onsubmit = (event) => {
    event.preventDefault()
    // setFullName(firstName + " "+ lastName)
    alert("Form Submitted")
  }


  return (
    <>
      <div className="main">
        <form onSubmit={onsubmit} >
          <h1>Hello {fullName.fName} {fullName.lName}</h1>
          <h2>{fullName.gmail}</h2>
          <input type="text"
            autocomplete="off"
            onChange={inputEvent}
            value={fullName.fName}
            name='fName'
            placeholder='Enter your First Name' />
          <br />
          <input type="text"
            // onChange={inputEventTwo}
            onChange={inputEvent}
            value={fullName.lName}
            name='lName'
            placeholder='Enter your Last Name' />
          <br />
          <input type="gmail"
            // onChange={inputEventTwo}
            onChange={inputEvent}
            value={fullName.gmail}
            name='gmail'
            autocomplete="off"
            placeholder='Enter your Gmail Address' />
          <br />
          <button type='submit' >Submit</button>
        </form>
      </div>
    </>
  )
}

export default App
