import { useEffect, useState } from 'react';
import UserList from './UserList';

// array value
const UserInfo = [
  {
    id: 1,
    name: 'Jomer',
    email: 'Jomer@gmail.com',
  },
  {
    id: 2,
    name: 'Abby',
    email: 'Abby@gmail.com',
  },
  {
    id: 3,
    name: 'Lerma',
    email: 'Lerma@gmail.com',
  },
];

function App() {
  // need empty value users here
  const [users, setUsers] = useState([]);

  // useEffect
  useEffect(() => {
    const setTime = setTimeout(() => {
      setUsers(UserInfo);
    }, 3000);
    return () => clearTimeout(setTime);
  }, []);

  return (
    <>
      <div>
        <h1>User List</h1>
        <div className="flex flex-col gap-10">
          {users.map((user) => (
            <UserList
              key={user.id}
              id={user.id}
              name={user.name}
              email={user.email}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
