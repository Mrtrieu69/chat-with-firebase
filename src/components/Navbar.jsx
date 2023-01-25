import React from "react";

const Navbar = () => {
    const currentUser = {
        photoURL: "",
        displayName: "",
    };

    const handleSignOut = () => {};

    return (
        <div className="navbar">
            <span className="logo">Lama Chat</span>
            <div className="user">
                <img src={currentUser.photoURL} alt="" />
                <span>{currentUser.displayName}</span>
                <button onClick={handleSignOut}>logout</button>
            </div>
        </div>
    );
};

export default Navbar;
