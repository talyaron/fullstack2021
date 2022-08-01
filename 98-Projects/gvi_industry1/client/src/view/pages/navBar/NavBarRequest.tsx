import React from 'react';
import NavBarMenteeRequest from './components/NavBarMenteeRequest';
import NavBarMentorRequest from './components/NavBarMentorRequest';

interface navBarProps {
    currentUserType: String;
     loggedInUser: any;
}
function NavBarRequest (props: navBarProps) {
    const {currentUserType,loggedInUser} = props;

    return currentUserType === 'mentee' ? (
        <>
            <NavBarMenteeRequest loggedInUser={loggedInUser}/>
        </>
    ) : (
        <>
            <NavBarMentorRequest loggedInUser={loggedInUser} />
        </>
    );
}

export default NavBarRequest;
