import { useFetchUser } from '../customHooks/useFetchUser'

const User = () => {

  const {data,loading,error}=useFetchUser("https://jsonplaceholder.typicode.com/users");

  if(loading) return <p>Loading....</p>
  if(error) return <p>{error}</p>
  return (
    <div>
      <ul>
        {data.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default User