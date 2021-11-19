import React from 'react';
import Topnav from '../top-nav/topNav';

const Layout = ({children}) => {
    return (
        <>
            <Topnav />
            {children}
        </>
    )
}

export default Layout
