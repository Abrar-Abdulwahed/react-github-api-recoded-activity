import { useState, useEffect } from "react";
import Form from "./Form";
import UserCard from "./UserCard";
import "./styles.css";

export default function App() {
  const [username, setUsername] = useState("");
  const [userData, setUserData] = useState({});

  useEffect(() => {
    username
      ? fetch(`https://api.github.com/users/${username}`)
          .then((response) => response.json())
          .then((data) => {
            setUserData(
              !data.message
                ? {
                    login: data.login,
                    name: data.name,
                    avatar_url: data.avatar_url
                  }
                : data
            );
          })
      : setUserData({});
  }, [username]);

  return (
    <div className="card">
      <Form setUsername={setUsername} />
      <UserCard userData={userData} username={username} />
    </div>
  );
}
