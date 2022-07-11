import React from 'react'

function loopHndred() {
    return ([...Array(101)].map((something, i) => {
        return <option value={i} key={i}> stage  {i}</option>
    })
    )
}
function handleMatch(ev: any) {
    ev.preventDefault();
    // const form = ev.target;

    for (let i of ev.target) {

        const name = i.name;
        const value = i.value;

        match[i.name] = i.value; // name : value 
  
    }
    // console.log(match); // get the write elements 
    // i think now I need to send to the server and return the write mentors have the same proporties

}
let match = [{}];

const MatchingMentor = () => {
    return (
        <form onSubmit={handleMatch}>
            <div className='matching'>
                <div className='matching--wrapper'>

                    <h1>Mentor Matching</h1>
                    <p>First , you are In</p>
                    <select className='matching__btn' name="stage">
                        100 tasks stage
                        {(loopHndred)()}
                    </select>
                    <br />
                    <h3>Find a GVI Mentor</h3>
                    <select className='matching__btn' name="mentor">
                        <option value="sector" >sector</option>
                        <option value="education">education </option>
                        <option value="digital health">digital-health </option>
                        <option value="buisness">buisness </option>
                    </select>
                    <br />
                    <select className='matching__btn' name="speciality">
                        <option value="speciality">speciality</option>
                        <option value="gaming">gaming</option>
                    </select>
                    <br />
                    <button type="submit" className='matching__btn' >Match</button>


                </div>
            </div >
        </form>
    )
}

export default MatchingMentor