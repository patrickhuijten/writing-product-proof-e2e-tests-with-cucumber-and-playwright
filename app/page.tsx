import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.hero}>
      <h1 className={styles.title} style={{ gridArea: "title" }}>
        The coolest pre-event of JS conference 2024
      </h1>
      <p className={styles.description} style={{ gridArea: "dates" }}>
        June 12 @ Xebia | Wibautstraat 200, 1091 GR Amsterdam
      </p>
      <p className={styles.description} style={{ gridArea: "intro" }}>
        5+ speakers, sharing their experience to 100+ folks.
      </p>
      <p className={styles.description} style={{ gridArea: "description" }}>
        Understand the latest trends in JavaScript development. See what 10k+ JS
        developers are up to. Meet those who shape the present and the future of
        the prospering nation.
      </p>
    </div>
  );
}
