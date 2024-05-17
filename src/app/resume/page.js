import Image from "next/image";
import styles from "./resume.module.css";
import Link from "next/link";
import Education from '../components/Education';
import Experience from "../components/Experience";
import Skills from "../components/Skills";

const aboutMe = "I love solving problems, making beautiful and intuitive designs, and learning new tech and soft skills."

export default function Resume() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <article className={styles.about}>
          <Link
            href="/"
            rel="noopener noreferrer"
          >
            <Image className={styles.portrait}
              src="/portrait.jpg"
              alt="Sara's portrait"
              width={300}
              height={333}
              priority
            />
          </Link>
          <h1>Hi! I&#39;m Sara</h1>
          <p>{aboutMe}</p>
          <Link
          href="/gallery"
            className={styles.card}
            rel="noopener noreferrer"
          >
            <h2 className={styles.button}>My Projects</h2>
          </Link>
          <h3>Find me</h3>
          <Link
          href="https://github.com/LealSilveriogallery"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/github-mark-white.png"
              alt="GitHub logo"
              width={30}
              height={30}
              priority
            />
          </Link>
          <Link
          href="https://www.linkedin.com/in/sara-leal-silverio/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/In-White-40@2x.png"
              alt="LinkedIn logo"
              width={30}
              height={30}
              priority
            />
          </Link>
          <Link
          href="mailto:saralealsilverio@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/mail.png"
              alt="Mail icon"
              width={30}
              height={30}
              priority
            />
          </Link>
        </article>    
        <article className={styles.resume}>
          <Education/>
          <hr></hr>
          <Experience/>
          <hr></hr>
          <Skills/>
          <Link
            href="/resume.pdf"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          ><h3>View Full Resume<span>-&gt;</span></h3>
          </Link>
        </article>
      </main>

      <footer className={styles.footer}>
        <p>Created by Sara Leal Silverio</p>
    </footer>
    </div>   
  );
}