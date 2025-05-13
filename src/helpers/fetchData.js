import User from "../../models/user";

export default async function fetchUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return data.map(data => new User(data));
}