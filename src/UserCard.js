import "./styles.css";

export default function UserCard({ userData, username }) {
  return (
    <div className="user-card">
      {userData?.message && username ? (
        <>
          {console.log("not found", userData)}
          <h5 style={{ color: "red" }}>{userData.message}</h5>
        </>
      ) : (
        <>
          {console.log("found or empty search", userData)}
          <div>
            <img alt="avatar" src={userData?.avatar_url} />
          </div>
          <div>
            <h5>Name:{userData?.name}</h5>

            <p>Username: {userData?.login}</p>
          </div>
        </>
      )}
    </div>
  );
}
