import Link from "next/link";
import Image from "next/image";
import styles from "@styles/EventItem.module.css";

import { Event } from "types";

export default function EventItem({ evt }: { evt: Event }) {
  return (
    <div className={styles.event}>
      <div className={styles.img}>
        <Image
          src={evt.image ? evt.image : "/images/default-train.jpg"}
          width={180}
          height={150}
          alt="event-image"
        />
      </div>
      <div className={styles.info}>
        <span>
          {evt.date} at {evt.time}
        </span>
        <h3>{evt.name}</h3>
      </div>
      <div className={styles.link}>
        <Link href={`/events/${evt.slug}`} className="btn">
          Details
        </Link>
      </div>
    </div>
  );
}
