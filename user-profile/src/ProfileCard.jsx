import Avatar from './Avatar';
import './index.css'
import React, { use } from 'react';
import UserInfo from './UserInfo';
import ContactButton from './ContactButton';
const ProfileCard = () => {
    const user = { "name": "Jane Doe", "role": "Frontend Developer", "email":"jane.doe@example.com", "location":" San Francisco, CA"};
    return (
        <>
            <div className="profile-card">
                <Avatar src="https://i.pravatar.cc/150?img=12" alt="User Avatar"/>
                <UserInfo name={user.name} role={user.role} email={user.email} location={user.location}/>
                <ContactButton link="#"/>
            </div>
        </>
        
    );
};

export default ProfileCard;