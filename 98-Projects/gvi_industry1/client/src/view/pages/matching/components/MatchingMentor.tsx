import React from 'react'
import axios from 'axios';
function loopHndred() {
    return ([...Array(101)].map((something, i) => {
        return <option value={i} key={i}> stage  {i}</option>
    })
    )
}
async function handleMatch(ev: any) {
    try {
        ev.preventDefault();

        for (let i of ev.target) {
            match[i.name] = i.value; // name : value 

        }
        console.log(match); // get the write elements 
        // i think now I need to send to the server and return the write mentors have the same proporties

        const { data } = await axios.post("/api/matching/select-mentors", { match });

        if(data === []) throw new Error('we dont have a match for your choices')
        
        if(data.ok){
            console.log('your match according to your choices ' , data.matchings);
        }
    } catch (error) {
        console.error(error);
    }


}
let match: any = {};

const MatchingMentor = () => {
    return (
        <form onSubmit={handleMatch}>
            <div className='matching'>
                <div className='matching--wrapper'>

                    <h1>Mentor Matching</h1>
                    <p>First , you are In</p>
                    <select className='matching__btn' name="stage" required >
                       <option value="100 tasks stage" disabled>100 tasks stage</option>
                        {(loopHndred)()}
                    </select>
                    <br />
                    <h3>Find a GVI Mentor</h3>
                    <select className='matching__btn' name="mentor" required>
                        <option value="sector" disabled >sector</option>
                        <option value="education">education </option>
                        <option value="digital health">digital-health </option>
                        <option value="buisness">buisness </option>
                    </select>
                    <br />
                    <select className='matching__btn' name="speciality" required>
                        <option value="speciality" disabled>speciality</option>
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