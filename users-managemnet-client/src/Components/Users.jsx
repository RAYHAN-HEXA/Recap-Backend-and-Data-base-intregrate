import React, { use, useState } from 'react';
import { addUser, buildUserPayload, isValidEmail } from '../userApi';

const Users = ({ userPromise }) => {

    // load users
    const usersdata = use(userPromise);

    const [users, setUsers] = useState(usersdata);
    const [error, setError] = useState('');

    // handle add user
    const handleAddUser = async (e) => {
        setError('');
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;

        if (!name.trim() || !email.trim()) {
            setError('Name and email are required.');
            return;
        }

        if (!isValidEmail(email)) {
            setError('Please enter a valid email address.');
            return;
        }

        const payload = buildUserPayload({ name, email });

        try {
            const data = await addUser(payload);
            setUsers((prevUsers) => [...prevUsers, data]);
            e.target.reset();
        } catch (fetchError) {
            setError(fetchError.message || 'Unable to add user.');
        }
    };

    return (
        <div>
            <h2>Add a User</h2>

            <form onSubmit={handleAddUser}>
                <input
                    type="text"
                    name="name"
                    placeholder="name"
                />

                <input
                    type="email"
                    name="email"
                    placeholder="email"
                />

                <button type="submit">
                    Add User
                </button>
            </form>

            {error && <p style={{ color: 'red' }}>{error}</p>}

            <hr />

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