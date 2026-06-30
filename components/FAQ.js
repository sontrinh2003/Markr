import { useState } from "react";
import styles from "../styles/FAQ.module.css";

const faqs = [
  {
    q: "How accurate is Markr's AI-powered marking system?",
    a: "Markr's AI marking system achieves 97% accuracy across a wide range of question types, including multiple choice, short answer, and extended response. The system is continuously trained on curriculum-aligned marking rubrics and flags any low-confidence responses for teacher review.",
  },
  {
    q: "How long does it take to implement Markr at our school?",
    a: "Most schools are fully up and running within 1-2 weeks. Our onboarding team helps with account setup, curriculum mapping, and staff training, and our support team is on hand throughout the rollout to make sure the transition is smooth.",
  },
  {
    q: "Can Markr integrate with existing LMS and student information system?",
    a: "Yes. Markr integrates with popular LMS and SIS platforms, allowing rosters, grades, and assessment results to sync automatically without disrupting your existing workflows.",
  },
  {
    q: "Is Markr compliant with student data privacy regulations?",
    a: "Markr is fully compliant with relevant student data privacy regulations. All data is encrypted in transit and at rest, and we never share student information with third parties without consent.",
  },
];

function Chevron({ open }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="18"
      height="18"
      fill="none"
      className={`${styles.chevron} ${open ? styles.chevronOpen : ""}`}
    >
      <path
        d="m6 9 6 6 6-6"
        stroke="#10182b"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggle = (i) => {
    setOpenIndex((current) => (current === i ? -1 : i));
  };

  return (
    <section className={styles.section} id="faqs">
      <div className="container">
        <div className={styles.heading}>
          <span className="section-eyebrow">FAQS</span>
          <h2>Frequently Asked Questions</h2>
          <p>
            Get answers to common questions about Markr and how it can
            benefit your school.
          </p>
        </div>

        <div className={styles.list}>
          {faqs.map((item, i) => {
            const open = openIndex === i;
            return (
              <div className={styles.item} key={item.q}>
                <button
                  className={styles.question}
                  onClick={() => toggle(i)}
                  aria-expanded={open}
                >
                  {item.q}
                  <Chevron open={open} />
                </button>
                {open && <p className={styles.answer}>{item.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
