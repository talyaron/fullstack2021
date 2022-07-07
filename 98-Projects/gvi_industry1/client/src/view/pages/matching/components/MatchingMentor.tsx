import React from 'react'

const MatchingMentor = () => {
    return (
        <div className='matching'>
            <div className='matching--wrapper'>
                <h1>Mentor Matching</h1>
                <p>First , you are In</p>
                <select className='matching__btn'>
                    <option value="11">100 tasks stage</option>
                    <option value="12">Volvo</option>
                </select>
                <br />
                <h3>Find a GVI Mentor</h3>
                <select className='matching__btn'>
                    <option value="11">sector</option>
                    <option value="12">Volvo</option>
                </select>
                <br />
                <select className='matching__btn'>
                    <option value="11">speciality</option>
                    <option value="12">Volvo</option>
                </select>
                <br />
                <button className='matching__btn'>Match</button>
            </div>
        </div>
    )
}

export default MatchingMentor