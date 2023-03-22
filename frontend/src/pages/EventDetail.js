import { useParams } from "react-router-dom";

export default function EventDetailPage() {
  const { eventId } = useParams();

  return <div>{eventId}</div>;
}
