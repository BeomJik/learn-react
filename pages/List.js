import React, { useState } from "react";

const User = ({userData}) => {
    return (
        <tr>
            <td>{userData.name}</td>
            <td>{userData.email}</td>
        </tr>
    );
}

const UserList = () =>{
    const users = [
        {email : 'gamst@gmail.com',name : '김인직'},
        {email : 'kim@gmail.com',name : '김병지'},
        {email : 'lee@gmail.com',name : '이삼이'},
        {email : 'park@gmail.com',name : '창근이'}
    ];
    return(
        <table>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>이메일</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => <User userData={user} />)}
            </tbody>
        </table>
    );
}

export default UserList;