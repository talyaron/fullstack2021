import React from 'react';
import NavBarAdmin from './navBar/components/NavBarAdmin';
import {Outlet} from 'react-router-dom';
interface navBarAdminLayoutProps {
    loggedInUser: any;
}
function AdminLayout(props: navBarAdminLayoutProps) {
    const {loggedInUser} = props;
    return (
        <>
            <NavBarAdmin loggedInUser={loggedInUser} />
            <Outlet />
        </>
    );
}

export default AdminLayout;
