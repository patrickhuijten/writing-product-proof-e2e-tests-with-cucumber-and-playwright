import Link from "next/link";
import styles from "./page.module.css";
import WorkshopCard from "./workshopCard";
import WorkshopForm from "./workshopForm";

export default function Workshops({
  searchParams,
}: {
  searchParams?: Record<string, string>;
}) {
  const workshops = [
    {
      id: 1,
      title: "React Hooks",
      date: "June 12, 2024",
      location: "Xebia | Wibautstraat 200, 1091 GR Amsterdam",
      description: "Learn how to use React Hooks in your projects.",
    },
    {
      id: 2,
      title: "TypeScript",
      date: "June 13, 2024",
      location: "Xebia | Wibautstraat 200, 1091 GR Amsterdam",
      description: "Learn how to use TypeScript in your projects.",
    },
    {
      id: 3,
      title: "GraphQL",
      date: "June 14, 2024",
      location: "Xebia | Wibautstraat 200, 1091 GR Amsterdam",
      description: "Learn how to use GraphQL in your projects.",
    },
  ];

  const activeId = searchParams?.id ? parseInt(searchParams.id) : null;
  const selectedWorkshop = workshops.find(({ id }) => id === activeId) || null;

  const hasSignedUp = searchParams?.signedUp === "true";
  const signedUpWorkshopId = searchParams?.signedUpWorkshopId
    ? parseInt(searchParams.signedUpWorkshopId)
    : null;

  const signedUpWorkshop =
    workshops.find(({ id }) => id === signedUpWorkshopId) || null;

  return (
    <>
      {hasSignedUp && signedUpWorkshop && (
        <h1 className={styles.successMessage}>
          You have successfully signed up for {signedUpWorkshop.title} workshop!
        </h1>
      )}

      <div className={styles.container} aria-disabled={hasSignedUp}>
        <div>
          {activeId ? (
            <h2>
              Sign up for {selectedWorkshop?.title} on {selectedWorkshop?.date}
            </h2>
          ) : (
            <h2>Select a workshop on the panel on the side</h2>
          )}
          <WorkshopForm active={activeId !== null} workshopId={activeId} />
        </div>
        <div className={styles.workshopList}>
          {workshops.map(({ id, title, date, location, description }) => (
            <Link href={`/workshops?id=${id}`} key={id}>
              <WorkshopCard
                id={id}
                title={title}
                date={date}
                location={location}
                description={description}
                active={activeId === id}
              />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
