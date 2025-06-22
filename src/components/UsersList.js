import {useState, useContext, useEffect} from 'react'
import fetchData from '@/helpers/fetchData';
import sorting from '@/helpers/sorting';
import UserCard from './UserCard';

export default function UsersList (){
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedUser, setSelectedUser] = useState(null);


  useEffect(() => {
    async function loadUsers() {
      const data = await fetchData();
      setUsers(data);
    }

    loadUsers();
  }, []);


const filteredUsers = users.filter(user => user.matches(filter));
const sortedUsers = sorting(filteredUsers, sortOrder);

 return (
    <div className="p-5 max-w-8xl mx-auto">
     
      <input
        type="text"
        placeholder="Filter by name, addres, etc..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />

     <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1"
        >
          <option value="ascName">Name (A → Z)</option>
          <option value="descName">Name (Z → A)</option>

        </select>

      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-5 ">
   
        {sortedUsers.map(user => (
          <div key={user.id} className="border p-4 rounded shadow grid"  onClick={() => setSelectedUser(user)}>
            <div><h2 className="text-xl font-bold">{user.name}</h2></div>
            <div><strong>Username:</strong> {user.username}</div>
            <div><strong>Email:</strong> {user.email}</div>
            <div><strong>City:</strong> {user.city}</div>
            <div><strong>Company:</strong> {user.company}</div>
          </div>
        ))}
      </div>

      {selectedUser && (
        <UserCard user={selectedUser} onClose={() => setSelectedUser(null)} />
      )}


    </div>
  );
}