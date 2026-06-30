import styles from "../styles/Hero.module.css";

const stats = [
  {
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
        <rect x="3" y="5" width="18" height="15" rx="2" stroke="white" strokeWidth="1.8" />
        <path d="M3 9h18" stroke="white" strokeWidth="1.8" />
        <path d="M8 3v4M16 3v4" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
        <circle cx="16" cy="15" r="3.2" fill="#0a7cf5" stroke="white" strokeWidth="1.4" />
        <path d="M16 13.6V15l1 .8" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
    ),
    value: "95%",
    label: "TIME SAVED ON MARKING",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
        <rect x="2" y="5" width="20" height="13" rx="2" stroke="white" strokeWidth="1.8" />
        <path d="M9 21h6M12 18v3" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M10 9.5 14 11.5 10 13.5V9.5Z" fill="white" />
      </svg>
    ),
    value: "500+",
    label: "SCHOOLS ON BOARD",
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" width="26" height="26" fill="none">
        <rect x="2" y="7" width="17" height="10" rx="2" stroke="white" strokeWidth="1.8" />
        <path d="M19 10v4l3-2-3-2Z" fill="white" />
        <path d="M6 12h7" stroke="white" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
    value: "97%",
    label: "MARKING ACCURACY",
  },
];

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.blobOne} aria-hidden="true" />
      <div className={styles.blobTwo} aria-hidden="true" />
      <div className={styles.grid} aria-hidden="true" />
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <h1>
            AI-Powered
            <br />
            Assessment for
            <br />
            Schools
          </h1>
          <p className={styles.sub}>
            Create, assign, and auto-mark assessments in minutes. Free up
            teacher time and track every student&rsquo;s progress in one
            place.
          </p>
          <div className={styles.ctaRow}>
            <a href="#stay-updated" className="btn btn-primary">
              Get product updates <span aria-hidden="true">&rarr;</span>
            </a>
            <a href="#product" className="btn btn-outline">
              Learn more
            </a>
          </div>
        </div>

        <div className={styles.stats}>
          {stats.map((s, i) => (
            <div key={s.label}>
              {i > 0 && <div className={styles.divider} aria-hidden="true" />}
              <div className={styles.statRow}>
                <span className={styles.statIcon}>{s.icon}</span>
                <div>
                  <div className={styles.statValue}>{s.value}</div>
                  <div className={styles.statLabel}>{s.label}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.curve} aria-hidden="true" />
    </section>
  );
}
