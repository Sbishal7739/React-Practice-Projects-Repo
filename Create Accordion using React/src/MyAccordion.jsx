import React, { useState } from 'react'

const MyAccordion = ({ question, answer }) => {

    const [show, setShow] = useState(false);

    return (
        <>
            <div className="main-heading">
                <p onClick={() => setShow(!show)}>
                    {show ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
                </p>
                <h3>{question}</h3>
            </div>
            {
                show && <p className='answer'>{answer}</p>
            }
            
        </>
    )
}

export default MyAccordion
