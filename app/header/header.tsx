import React from "react";
import styles from "./header.module.css";
import Link from "next/link";

const Header = () => {
  const links = [
    { href: "/", label: "Home", highlight: false },
    { href: "/about", label: "About", highlight: false },
    { href: "/contact", label: "Contact", highlight: false },
    { href: "/speakers", label: "Speakers", highlight: false },
    { href: "/sponsors", label: "Sponsors", highlight: false },
    { href: "/workshops", label: "Workshops", highlight: true },
  ];

  return (
    <header className={styles.header}>
      <img src="/logo.png" alt="logo" className={styles.logo} />
      <nav className={styles.nav}>
        {links.map(({ href, label, highlight }) => (
          <Link
            className={styles.link}
            href={href}
            key={href}
            data-highlight={highlight}
          >
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
