import React from 'react';
import './PersonalDetail.css';

const PersonalDetail = ({ role, firstName, lastName, email, contact, address, batch }) => {
    return (
        <div className="personal-detail">
            <h2>Personal Detail</h2>
            <div className="detail-container">
                <div className="detail-row">
                    <span className="label">Role:</span> <span className="value">{role}</span>
                </div>
                <div className="detail-row">
                    <span className="label">First Name:</span> <span className="value">{firstName}</span>
                    <span className="label">Last Name:</span> <span className="value">{lastName}</span>
                    <span className="label">Email Id:</span> <span className="value">{email}</span>
                </div>
                <div className="detail-row">
                    <span className="label">Contact:</span> <span className="value">{contact}</span>
                    <span className="label">Address:</span> <span className="value">{address}</span>
                    <span className="label">Batch:</span> <span className="value">{batch}</span>
                </div>
            </div>
        </div>
    );
};

export default PersonalDetail;
