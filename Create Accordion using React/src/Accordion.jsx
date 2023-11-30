import { useState } from 'react'
import { questionsAndAnswers } from './Api'
import MyAccordion from './MyAccordion'

const Accordion = () => {


    const [data, setData] = useState(questionsAndAnswers);


    return (
        <>
            <section className='main-div'>
                <h1>Interview Questions</h1>
                {
                    data.map((currentElement) => {
                        const { id, question, answer } = currentElement;
                        return <MyAccordion key={id}{...currentElement} />
                    })
                }
            </section>
        </>
    )
}

export default Accordion
