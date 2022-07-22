export default function NameForm(props) {
  return (
    <form onSubmit={(e) => props.handleSubmit(e)}>
      <div className="inputs">
        <input
          onChange={(e) => props.handleChange(e.target)}
          id="name1"
          type="text"
          placeholder="First Name..."
        ></input>
        <input
          onChange={(e) => props.handleChange(e.target)}
          id="name2"
          type="text"
          placeholder="Last Name..."
        ></input>
      </div>
      <button>Submit</button>
    </form>
  );
}
