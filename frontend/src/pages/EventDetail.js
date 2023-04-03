import { json, useLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

export default function EventDetailPage() {
  const data = useLoaderData();

  console.log(data, "sdsd");
  return (
    <div>
      <EventItem event={data.event} />
    </div>
  );
}

export async function loader({ request, params }) {
  const id = params.eventId;
  const response = await fetch("http://localhost:5000/events/" + id, {
    credentials: "same-origin",
  });
  if (!response.ok) {
    throw json(
      { message: "Could not fetch details for selected events." },
      { status: 500 }
    );
  } else {
    return response;
  }
}
