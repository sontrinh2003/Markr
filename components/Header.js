import { useState } from "react";
import styles from "../styles/Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      {menuOpen && (
        <div
          className={styles.backdrop}
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
      <div className={`container ${styles.inner}`}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoMark} aria-hidden="true">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none">
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

        <nav className={`${styles.nav} ${menuOpen ? styles.navOpen : ""}`}>
          <button
            className={styles.closeBtn}
            aria-label="Close menu"
            onClick={() => setMenuOpen(false)}
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none">
              <path
                d="M6 6l12 12M18 6 6 18"
                stroke="#10182b"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
          <a href="#product" onClick={() => setMenuOpen(false)}>
            Products
          </a>
          <a href="#resources" onClick={() => setMenuOpen(false)}>
            Resources
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <div className={styles.mobileActions}>
            <a href="#login" className="btn btn-outline-nav">
              Log in
            </a>
            <a href="#signup" className={styles.signupMobile}>
              Sign up
            </a>
          </div>
        </nav>

        <div className={styles.actions}>
          <a href="#login" className={styles.loginBtn}>
            Log in
          </a>
          <a href="#signup" className={styles.signupBtn}>
            Sign up
          </a>
        </div>

        <button
          className={styles.burger}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
