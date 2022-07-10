import React from 'react'

function loopHndred() {
    return ([...Array(101)].map((something, i) => {
        return <option value="i" key={i}> stage  {i}</option>
    })
    )
}
function handleMatch(ev:any){
    ev.preventDefault();
    console.log(ev.target.value);
    // ev.target.reset;
    
}


const MatchingMentor = () => {
    return (
        <form onSubmit={handleMatch}>
            <div className='matching'>
                <div className='matching--wrapper'>
                    <h1>Mentor Matching</h1>
                    <p>First , you are In</p>
                    <select className='matching__btn'>
                        100 tasks stage
                        {(loopHndred)()}
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
                    <button type = "submit" className='matching__btn' >Match</button>

                </div>
            </div>
        </form>
    )
}

export default MatchingMentor