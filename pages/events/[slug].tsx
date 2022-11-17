import { FaPencilAlt, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import Layout from "@components/Layout";
import { API_URL } from "@config/index";
import { Event } from "../../types";
import styles from "@styles/Event.module.css";
import React from "react";

export default function EventPage({ evt }: { evt: Event }) {
  const router = useRouter();
  const deleteEvent = (e: React.MouseEvent<HTMLElement>) => {
    console.log("delete");
  };

  return (
    <Layout>
      <div className={styles.event}>
        <div className={styles.controls}>
          <Link href={`/events/edit/${evt.id}`}>
            <FaPencilAlt />
            Edit Event
          </Link>
          <a href="#" className={styles.delete} onClick={deleteEvent}>
            <FaTimes />
            Delete Event
          </a>
        </div>
        <span>
          {evt.date} at {evt.time}
        </span>
        <h1>{evt.name}</h1>
        {evt.image && (
          <div className={styles.image}>
            <Image src={evt.image} width={300} height={220} alt="event-image" />
          </div>
        )}
        <h3>Instructors:</h3>
        <p>{evt.instructors}</p>
        <h3>Description</h3>
        <p>{evt.description}</p>
        <h3>Venue: {evt.venue}</h3>
        <p>{evt.address}</p>
        <Link href="/events" className={styles.back}>
          {"<"} Back
        </Link>
      </div>
    </Layout>
  );
}

// export async function getStaticPaths() {
//   const res = await fetch(`${API_URL}/events`);
//   const events = await res.json();
//   const paths = events.map((evt: Event) => ({
//     params: { slug: evt.slug },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// }

export async function getServerSideProps({
  params: { slug },
}: {
  params: { slug: string };
}) {
  // const res = await fetch(`${API_URL}/events/${slug}`);
  const res = await fetch(`${API_URL}/events`);
  const events = await res.json();
  const event = events.filter((event: Event) => event.slug === slug)[0];

  return {
    props: {
      // evt: events[0],
      evt: event,
    },
  };
}
