import { match } from 'assert';
import { Link } from 'react-router-dom';
import React from 'react'
import Matching from '../Matching';

interface propCard {
    matchQuick:any
    
}
interface interfaceMatchQuick {
    firstname: String,
    lastname: String,
    userId: String
}
const CardOfMentee = (prop: propCard) => {
    const {  matchQuick } = prop;

    return (
        <div className='cardOfMentor'>
                    {matchQuick.map((match:interfaceMatchQuick)=> {
                        return(
                            <div className='cardOfMentor--mentor box'>

                                {/* <Link to = {match.userId} Key = {match.userId}className='cardOfMentor--mentor__link' >link to </Link>  */}
                                <div className='cardOfMentor--mentor__fullName'>{match.firstname} {match.lastname}'s profile</div>
                              
                             
                            </div>
                        )
                    })}   
        </div>
    )
}

export default CardOfMentee