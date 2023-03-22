import { Link } from "react-router-dom";

const DUMMY_EVNETS = [
  { id: "e1", title: "Some event" },
  { id: "e2", title: "Another event" },
];

export default function EventsPage() {
  return (
    <div>
      <h1>Events Page</h1>
      <ul>
        {DUMMY_EVNETS.map((event) => (
          <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
