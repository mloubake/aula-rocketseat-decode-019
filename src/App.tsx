import { gql, useQuery } from "@apollo/client";

const GET_USER = gql`
  query {
    users {
      id
      name
    }
  }
`;

type User = {
  id: String;
  name: String;
};

function App() {
  const { data, loading } = useQuery<{ users: User[] }>(GET_USER);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="App">
      <ul>
        {data?.users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
