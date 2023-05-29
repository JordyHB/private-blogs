import React from 'react';

function LogoutButton({ updatestatus }) {
    return (
        <button onClick={ updatestatus }>Log out</button>
    );
}

export default LogoutButton;