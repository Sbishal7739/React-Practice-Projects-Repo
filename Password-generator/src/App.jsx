import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  // useRef
  const passwordRef = useRef(null)

  const copyPasswordToClick = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  },
    [password])

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_+-={}[]|;:',"

    for (let i = 0; i <= length; i++) {
      // Create Password
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }

    setPassword(pass)


  }, [length, numberAllowed, charAllowed, setPassword])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])



  return (
    <>
      <div className="w-full max-w-lg mx-auto shadow-md rounded my-8 px-4 text-orange-500 bg-gray-800">
        <h1 className='text-center text-lg'>Password Generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4 py-6 ">
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3 rounded-lg'
            readOnly
            placeholder='Password'
            ref={passwordRef}
          />
          <button
            onClick={copyPasswordToClick}
            className='bg-orange-400 text-white outline-none px-2 py-0.5 shrink-0 mx-1'>copy</button>
        </div>
        <div className="flex stxt-sm gap-x-2">
          <div className="flex items-center gap-x-1">
            <input
              type="range"
              min={6}
              max={36}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length: {length}</label>
          </div>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            onChange={() => {
              setNumberAllowed((prev) => !prev); // Corrected the syntax here
            }}
          />
          <label>Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label>Characture</label>
        </div>
      </div>
    </>
  )
}

export default App
