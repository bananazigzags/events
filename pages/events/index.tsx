import Layout from "@components/Layout";
import EventItem from "@components/EventItem";
import { API_URL } from "@config/index";
import { Event } from "../../types";

export default function Events({ events }: { events: Event[] }) {
  return (
    <Layout>
      <h1>Events</h1>
      {events.length === 0 && <h3>No events to show</h3>}
      {events.map((evt) => (
        <EventItem key={evt.id} evt={evt} />
      ))}
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/events`);
  const events = await res.json();

  return {
    props: { events },
    // revalidate: 1,
  };
}
