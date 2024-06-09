import styles from "./workshopCard.module.css";

interface WorkshopCardProps {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  active: boolean;
}
export default function WorkshopCard({
  title,
  date,
  location,
  description,
  active,
}: WorkshopCardProps) {
  return (
    <div className={styles.workshopCard} data-active={active}>
      <p className="workshopDate">{date}</p>
      <h2 className={styles.title}>{title}</h2>
      <p className="workshopDescription">{description}</p>
      <p className="workshopLocation">{location}</p>
    </div>
  );
}
