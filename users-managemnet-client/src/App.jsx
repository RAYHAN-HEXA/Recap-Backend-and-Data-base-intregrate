
import './App.css'
import Users from './Components/Users';
import { fetchUsers } from './userApi';

const userPromise = fetchUsers();

function App() {
  return (
    <div>
      <h1>Users Management</h1>
      <Users userPromise={userPromise} />
    </div>
  );
}

export default App
