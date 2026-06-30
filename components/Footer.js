import styles from "../styles/Footer.module.css";

const columns = [
  {
    title: "Product",
    links: ["Features", "Pricing"],
  },
  {
    title: "Resources",
    links: ["Blog", "Documentation", "Case Studies"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "T&C"],
  },
];

const socials = ["Twitter", "Facebook", "Instagram", "LinkedIn"];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.top}`}>
        <div className={styles.brandCol}>
          <a href="#" className={styles.logo}>
            <span aria-hidden="true">
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
                <path
                  d="M12 2 1 7l11 5 9-4.09V17h2V7L12 2Z"
                  fill="currentColor"
                />
                <path
                  d="M5 13.18v3.7C5 19.6 8.13 21 12 21s7-1.4 7-4.12v-3.7l-7 3.18-7-3.18Z"
                  fill="currentColor"
                />
              </svg>
            </span>
            Markr
          </a>

          <div className={styles.socials}>
            {socials.map((s) => (
              <a
                key={s}
                href="#"
                aria-label={s}
                className={styles.socialIcon}
              >
                {s[0]}
              </a>
            ))}
          </div>

          <div className={styles.contact}>
            <p className={styles.contactLabel}>Contact us</p>
            <p>support@markr.com.au</p>
            <p>+61-394-349-143</p>
          </div>
        </div>

        <div className={styles.linkCols}>
          {columns.map((col) => (
            <div key={col.title} className={styles.linkCol}>
              <p className={styles.colTitle}>{col.title}</p>
              {col.links.map((link) => (
                <a key={link} href="#">
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className={styles.bottom}>
        <div className={`container ${styles.bottomInner}`}>
          <span>&copy; {new Date().getFullYear()} Markr. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
