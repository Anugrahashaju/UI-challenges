import React from "react";
import './index.css'
const UserInfo = ({name, role, email, location}) => {
    return (
        <>
            <div className="name">{name}</div>
            <div className="role">{role}</div>
            <div className="info">
                <p><strong>Email:</strong>{email}</p>
                <p><strong>Location:</strong> {location}</p>
            </div>
        </>
    );
};

export default UserInfo;
