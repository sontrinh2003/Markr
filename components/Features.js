import styles from "../styles/Features.module.css";

const features = [
  {
    title: "AI-Powered Auto-Marking",
    desc: "Advanced AI automatically marks assessments with 97% accuracy, providing instant feedback to students and saving teachers hours of work.",
    bg: "var(--color-purple-bg)",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
        <circle cx="12" cy="8" r="3.4" stroke="#6a4cf5" strokeWidth="1.8" />
        <path
          d="M4.5 20c1.4-3.6 4.3-5.4 7.5-5.4s6.1 1.8 7.5 5.4"
          stroke="#6a4cf5"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Intuitive Assessment Builder",
    desc: "Create comprehensive assessments in minutes with our drag-and-drop builder. Choose from multiple question types and customizable templates.",
    bg: "var(--color-red-bg)",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
        <path d="M12 3 21 12 12 21 3 12 12 3Z" stroke="#ef5d5d" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    title: "Collaborative Platform",
    desc: "Share assessments across departments, standardize grading criteria, and collaborate with your teaching team seamlessly.",
    bg: "var(--color-green-bg)",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
        <path
          d="M4 5h16v10H8l-4 4V5Z"
          stroke="#29c46a"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Seamless Integration",
    desc: "Works with your existing LMS and student information systems. Easy setup with no disruption to current workflows.",
    bg: "var(--color-gray-bg)",
    icon: (
      <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
        <path
          d="M21 12.5A9 9 0 1 1 11.5 3a7 7 0 0 0 9.5 9.5Z"
          stroke="#374151"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section className={styles.section} id="features">
      <div className="container">
        <div className={styles.heading}>
          <span className="section-eyebrow">FEATURES</span>
          <h2>Everything You Need to Transform Assessment</h2>
          <p>
            Built specifically for K-12 schools, Markr combines powerful AI
            technology with educator-friendly design to deliver a
            comprehensive assessment solution.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((f) => (
            <div className={styles.card} key={f.title}>
              <span className={styles.icon} style={{ background: f.bg }}>
                {f.icon}
              </span>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
