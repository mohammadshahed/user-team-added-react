import React, { useState } from 'react';
import './User.css';

const User = (props) => {
    const {name, email, picture, website, phone} = props.user;

    const [mobile, setMobile] = useState('');
    const addMember = props.addMember;

    const fullName = name.first + ' ' + name.last; 

    const showMobile = ()=> setMobile(phone);
    return (
        <div className="userStyle">
            <div style={{marginTop: '25px'}}>
                <img src={picture.large} alt=""/>
            </div>
            <div style={{marginLeft:'20px'}}>
                <h1>Name: {fullName}</h1>
                <p>Email: {email}</p>
                <p><a target="_blank" href={website}>learn More About me</a></p>
                <p>Phone: {mobile}</p>
                <button onClick={showMobile}>Show Phone no</button>
                <button onClick={()=>addMember(fullName)}>Add me</button>
            </div>
        </div>
    );
};

export default User;