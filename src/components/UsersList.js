import {useState, useContext, useEffect} from 'react'
import fetchData from '@/helpers/fetchData';



export default function UsersList (){
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('');

  useEffect(() => {
    async function loadUsers() {
      const data = await fetchData();
      setUsers(data);
    }

    loadUsers();
  }, []);


const filtered = users.filter(user => user.matches(filter));

console.log(users)


 return (
    <div className="p-5 max-w-8xl mx-auto">
      <input
        type="text"
        placeholder="Фильтр по имени, городу, email..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="w-full p-2 mb-4 border rounded"
      />
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-5 ">
        {filtered.map(user => (
          <div key={user.id} className="border p-4 rounded shadow grid">
            <div><h2 className="text-xl font-bold">{user.name}</h2></div>
            <div><strong>Username:</strong> {user.username}</div>
            <div><strong>Email:</strong> {user.email}</div>
            <div><strong>City:</strong> {user.city}</div>
            <div><strong>Company:</strong> {user.company}</div>
          </div>
        ))}
      </div>
    </div>
  );
}