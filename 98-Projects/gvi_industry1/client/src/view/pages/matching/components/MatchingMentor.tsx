import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import CardOfMentee from './CardOfMentor';
import Matching from '../Matching';
interface interfaceMatchQuick {
    firstname: String,
    lastname: String,
    userId: String
}
function loopHndred() {
    return ([...Array(101)].map((something, i) => {
        return <option value={i} key={i}> stage  {i}</option>
    })
    )
}
async function handleMatch(ev: any, matchQuick: any, setMatchQuick: Function) {
    try {
        ev.preventDefault();
        let match: any = {};


        for (let i of ev.target) {
            match[i.name] = i.value; 
        }

        const { data } = await axios.post("/api/match/select-according-mentors", { match });
        if (data.ok) {
            const matchingArray: interfaceMatchQuick[] = [];
            data.matchings.forEach((match: any, i: number) => {
                let firstname = match.name.first;
                let lastname = match.name.last;
                let userId = match._id;

                if (firstname && lastname && userId) {
                    let toSet: interfaceMatchQuick = { firstname, lastname, userId }
                    matchingArray.push(toSet);

                }

            })
            setMatchQuick(matchingArray)
        }
    } catch (error) {
        console.error(error);
    }
}
const MatchingMentor = () => {
    const [matchQuick, setMatchQuick] = useState<Array<interfaceMatchQuick>>([])
    return (
        <form onSubmit={(event => handleMatch(event, matchQuick, setMatchQuick))}>
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
                        <option value="digital-health">digital-health </option>
                        <option value="buisness">buisness </option>
                    </select>
                    <br />
                    <button type="submit" className='matching__btn' >Match</button>


                </div>
                <CardOfMentee matchQuick={matchQuick} />
                {/* we need to add a contidinal rendring */}
            </div >
        </form>
    )
}

export default MatchingMentor