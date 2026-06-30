import { useState } from "react";
import styles from "../styles/EDMForm.module.css";

const initialState = {
  name: "",
  email: "",
  school: "",
  role: "",
};

export default function EDMForm() {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
  };

  const validate = () => {
    const next = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) {
      next.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!values.school.trim()) next.school = "Please enter your school name.";
    if (!values.role.trim()) next.role = "Please enter your role.";
    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setValues(initialState);
    }
  };

  return (
    <section className={styles.section} id="stay-updated">
      <div className="container">
        <div className={styles.heading}>
          <span className={styles.eyebrow}>STAY UPDATED</span>
          <h2>Get Product Updates &amp; Educational Insights</h2>
          <p>
            Join 500+ school leaders receiving exclusive updates on Markr
            features, K-12 assessment best practices, and success stories
            from schools like yours.
          </p>
        </div>

        <form className={styles.card} onSubmit={handleSubmit} noValidate>
          {submitted && (
            <div className={styles.success} role="status">
              Thanks for subscribing! Keep an eye on your inbox.
            </div>
          )}

          <div className={styles.grid}>
            <label className={styles.field}>
              <span>First &amp; Last Name</span>
              <input
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                placeholder="Jane Smith"
              />
              {errors.name && <em className={styles.error}>{errors.name}</em>}
            </label>

            <label className={styles.field}>
              <span>Email Address</span>
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleChange}
                placeholder="jane@school.edu"
              />
              {errors.email && (
                <em className={styles.error}>{errors.email}</em>
              )}
            </label>

            <label className={styles.field}>
              <span>School Name</span>
              <input
                type="text"
                name="school"
                value={values.school}
                onChange={handleChange}
                placeholder="Riverside High School"
              />
              {errors.school && (
                <em className={styles.error}>{errors.school}</em>
              )}
            </label>

            <label className={styles.field}>
              <span>Your Role</span>
              <input
                type="text"
                name="role"
                value={values.role}
                onChange={handleChange}
                placeholder="Principal"
              />
              {errors.role && <em className={styles.error}>{errors.role}</em>}
            </label>
          </div>

          <p className={styles.disclaimer}>
            By subscribing, you agree to receive product updates and
            educational content from Markr. You can unsubscribe at any time.
            We respect your privacy and will never share your information.
          </p>

          <button type="submit" className={styles.submit}>
            Subscribe to Updates
          </button>
        </form>
      </div>
    </section>
  );
}
