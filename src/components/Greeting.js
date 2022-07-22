export default function Greeting(props) {
  return (
    <div>
      <h3>
        Greetings, {props.firstName} {props.lastName}
      </h3>
    </div>
  );
}
