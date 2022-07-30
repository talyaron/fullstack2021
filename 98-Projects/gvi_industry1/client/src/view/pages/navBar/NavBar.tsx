import React from 'react';
import NavBarMentee from './components/NavBarMentee';
import NavBarMentor from './components/NavBarMentor';

interface navBarProps {
    currentUserType: String;
    loggedInUser: any;
}
function NavBar(props: navBarProps) {
    const {currentUserType, loggedInUser} = props;

    return currentUserType === 'mentee' ? (
        <>
            <NavBarMentee loggedInUser={loggedInUser} />
        </>
    ) : (
        <>
            <NavBarMentor loggedInUser={loggedInUser} />
        </>
    );
}

export default NavBar;
