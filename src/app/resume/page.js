import Image from "next/image";
import styles from "./resume.module.css";
import Link from "next/link";
import SkillChart from "./SkillChart";

export default function Resume() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <article className={styles.about}>
            <Image className={styles.portrait}
              src="/portrait.jpg"
              alt="Sara's portrait"
              width={400}
              height={433}
              priority
            />
          <p>This is me</p>
          <Link
          href="/gallery"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>My Projects</h2>
          </Link>
        </article>
      
        <article className={styles.resume}>
          <section className={styles.education}>

          </section>
          <section className={styles.experience}>

          </section>
          <section className={styles.skills}>
            <h1>Skill Chart</h1>
            <div className="skillChart">

            </div>
          </section>
          <Link
            href="/resume.pdf"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          ><p>View Full Resume<span>-&gt;</span></p>
          </Link>
          
        </article>
      </main>

      <footer className={styles.footer}>
        <p>Created by Sara Leal Silverio</p>
    </footer>
    </div>   
  );
}