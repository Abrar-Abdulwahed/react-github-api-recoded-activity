import "./styles.css";

export default function Form({ setUsername }) {
  return (
    <form>
      <h3>Search user Github</h3>
      <div className="mb-3">
        <label>User name</label>
        <input
          type="text"
          className="form-control"
          placeholder="user name"
          defaultValue={""}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
      </div>
    </form>
  );
}
