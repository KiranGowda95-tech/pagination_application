import "./index.css";
import React, { useState } from "react";
import Button from "./components/Button";
import Page from "./components/Page";

export default function App() {
  const [users, setUsers] = React.useState([]);
  const [page, setPage] = useState(0);
  const fetchData = async () => {
    const res = await fetch("https://reqres.in/api/users?page=2");
    const json = await res.json();
    setUsers(json.data);
  };
  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="App">
        <header>
          <h1 style={{ borderBottom: "5px solid red" }}>List of users</h1>
        </header>

        <Page users={users} />

        <Button page={page} setPage={setPage} users={users} />
      </div>
    </>
  );
}
