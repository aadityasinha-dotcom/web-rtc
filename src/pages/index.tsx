import type { NextPage } from 'next';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from '../styles/Home.module.scss';

const features = [
  { title: 'AI summary', text: 'Instant recaps of meetings in a clean, readable format.' },
  { title: 'Action items', text: 'Auto-captured next steps so nothing gets lost after the call.' },
  { title: 'Smart notes', text: 'Fast notes, searchable transcripts, and clear takeaways.' },
];

const Home: NextPage = () => {
  return (
    <motion.main className={styles.page} initial="hidden" animate="show" variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}>
      <div className={styles.backdrop} />

      <motion.section className={styles.hero} variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}>
        <p className={styles.kicker}>Video conferencing platform</p>
        <h1 className={styles.title}>Meet, summarize, and move faster.</h1>
        <p className={styles.description}>
          A clean landing page with login and sign up plus AI summary, smart notes,
          and other collaboration features.
        </p>
        <div className={styles.actions}>
          <Link href="/auth?mode=login" className={styles.primaryButton}>
            Login
          </Link>
          <Link href="/auth?mode=signup" className={styles.secondaryButton}>
            Sign up
          </Link>
        </div>
      </motion.section>

      <motion.section className={styles.featureGrid} variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}>
        {features.map((feature) => (
          <article key={feature.title} className={styles.featureCard}>
            <h2>{feature.title}</h2>
            <p>{feature.text}</p>
          </article>
        ))}
      </motion.section>

      <motion.section className={styles.infoPanel} variants={{ hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }}>
        <div>
          <p className={styles.panelLabel}>Built for clarity</p>
          <h2>Everything you need after the meeting.</h2>
        </div>
        <p>
          Combine summaries, notes, and follow-ups in one place so your team can
          focus on the next step.
        </p>
      </motion.section>
    </motion.main>
  );
};

export default Home;
