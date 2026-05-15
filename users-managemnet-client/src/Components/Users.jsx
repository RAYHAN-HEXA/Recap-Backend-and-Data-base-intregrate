import React from 'react';
import { use } from 'react';

const Users = ({ userPromise }) => {
    const users =  use(userPromise);
    console.log(users) 
    return (
        <div>
           {
            users.map((user) => (
                <div key={user.id}>
                    <h3>{user.name}</h3>
                    <p>{user.email}</p>
                </div>
            ))
           } 
        </div>
    );
};

export default Users;