import styles from "../styles/ProductOverview.module.css";

const checklist = [
  "Create assessments in minutes with our intuitive builder",
  "Real-time insights into student performance and learning gaps",
  "Seamless integration with your existing curriculum",
  "Comprehensive analytics for data-driven decision making",
];

function Check() {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
      <path
        d="m5 13 4 4L19 7"
        stroke="#29c46a"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function ProductOverview() {
  return (
    <section className={styles.section} id="product">
      <div className={`container ${styles.inner}`}>
        <div className={styles.copy}>
          <h2>
            Empower Your Teachers.
            <br />
            Elevate Student Outcomes.
          </h2>
          <p className={styles.body}>
            Markr is the comprehensive assessment platform designed for K-12
            schools that want to leverage AI to enhance teaching
            effectiveness. Our platform streamlines the entire assessment
            lifecycle, from creation to analysis, giving educators more time
            to focus on personalized instruction.
          </p>
          <ul className={styles.checklist}>
            {checklist.map((item) => (
              <li key={item}>
                <Check />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={styles.cardLabel}>Assessment Created</span>
            <h3>Year 8 Mathematics Quiz</h3>
            <div className={styles.cardMeta}>
              <div>
                <span className={styles.metaLabel}>Questions</span>
                <span className={styles.metaValue}>25</span>
              </div>
              <div>
                <span className={styles.metaLabel}>Duration</span>
                <span className={styles.metaValue}>45 min</span>
              </div>
            </div>
          </div>

          <div className={styles.cardBody}>
            <p className={styles.progressTitle}>Student Progress</p>

            <div className={styles.progressRow}>
              <span>Class Average</span>
              <span className={styles.progressPct}>78%</span>
            </div>
            <div className={styles.bar}>
              <div className={styles.barFill} style={{ width: "78%" }} />
            </div>

            <div className={styles.progressRow}>
              <span>Completion Rate</span>
              <span className={styles.progressPct}>92%</span>
            </div>
            <div className={styles.bar}>
              <div
                className={`${styles.barFill} ${styles.barGreen}`}
                style={{ width: "92%" }}
              />
            </div>

            <div className={styles.progressRow}>
              <span>Performance Trend</span>
              <span className={styles.progressPct}>85%</span>
            </div>
            <div className={styles.bar}>
              <div
                className={`${styles.barFill} ${styles.barPurple}`}
                style={{ width: "85%" }}
              />
            </div>
          </div>

          <div className={styles.cardFooter}>
            <span className={styles.dot} />
            Auto-marking Complete
            <span className={styles.timeAgo}>2 minutes ago</span>
          </div>
        </div>
      </div>
    </section>
  );
}
