import React, { use, useState } from 'react';

const Users = ({ userPromise }) => {
    // load users
    const initialUsers = use(userPromise);

    const [users, setUsers] = useState(initialUsers);

    const handleAddUser = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;

        const newUser = { name, email };

        fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUser)
        })
            .then(res => res.json())
            .then(data => {
                const addedUser = {
                    ...newUser,
                    _id: data.insertedId
                };

                setUsers([...users, addedUser]);
            });

        e.target.reset();
    };

    return (
        <div>
            <h2>Add a User</h2>

            <form onSubmit={handleAddUser}>
                <input type="text" name="name" placeholder="name" />
                <input type="email" name="email" placeholder="email" />
                <button type="submit">Add User</button>
            </form>

            <hr />

            {
                users.map((user) => (
                    <div key={user._id}>
                        <h3>{user.name}</h3>
                        <p>{user.email}</p>
                    </div>
                ))
            }
        </div>
    );
};

export default Users;