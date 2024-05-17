import Image from "next/image";
import styles from "./resume.module.css";
import Link from "next/link";

const aboutMe = "I love solving problems and making beautiful and intuitive designs. When I'm not programming, I love cooking and gaming."

export default function Resume() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <article className={styles.sticky}>
          <div className={styles.about}>
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
            <div>
              <h1>Hi! I&#39;m Sara</h1>
              <p>{aboutMe}</p>
            </div>
          </div>
          <Link
          href="/gallery"
            className={styles.button}
            rel="noopener noreferrer"
          >
            <h2>My Projects</h2>
          </Link>
          <h3>Find me</h3>
          <Link
          href="https://github.com/LealSilveriogallery"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image className={styles.portrait}
              src="/github-mark-white.png"
              alt="GitHub logo"
              width={30}
              height={30}
              priority
            />
          </Link>
          <Link
          href="https://www.linkedin.com/in/sara-leal-silverio/"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image className={styles.portrait}
              src="/In-White-40@2x.png"
              alt="LinkedIn logo"
              width={30}
              height={30}
              priority
            />
          </Link>
          <Link
          href="mailto:saralealsilverio@gmail.com"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image className={styles.portrait}
              src="/mail.png"
              alt="Mail icon"
              width={30}
              height={30}
              priority
            />
          </Link>
        </article>    
        <article className={styles.resume}>
          <section className={styles.education}>
            <h2>Education</h2>
            <h3>Software Engineering Bachelor |<i>Brigham Young University - Idaho</i> </h3>
            <ul>
              <li>Minor in Web Development</li>
              <li>Relevant Coursework: Backend Development, Frontend Development, Web Services, Advanced CSS, Database Design and Development, Programming with Data Structures, Technical Teamwork</li>
            </ul>
            <hr></hr>
            <h3>Graphic Design Associates | <i>Brightpoint Community College</i> </h3>
            <ul>
              <li>Relevant Coursework: Graphic Design, Adobe InDesign, Photoshop, and Illustrator, Typography</li>
            </ul>
          </section>
          <section className={styles.experience}>
            <h2>Experience</h2>
            <h3>Quality Control Checker | <i>The Occasions Group</i></h3>
            <p>The Occasions Group Company is a provider of customizable print and digital solutions for life&#39;s special moments. From
              invitations and announcements to personalized gifts and promotional materials</p>
            <ul>
              <li>Managed quality control of thousands of products while training other employees daily</li>
              <li>Packed and shipped products in an organized fashion in 3 areas of finalizing department</li>
              <li>Met tight deadlines while managing hundreds of orders during busy seasons</li>
            </ul>
          </section>
          <section className={styles.skills}>
            <h2>Skills</h2>
            <h3>Technical Skills</h3>
            <Image
              src="/techSkills.png"
              alt="Skill Chart"
              width={600}
              height={350}
              priority
            />
            <h3>Additional Skills</h3>
            <ul>
              <li>Frameworks: .NET, React, Svelte, Sass, Node.js, Next.js, Express.js</li>
              <li>Tolls: Visual Studio Code, Visual Studio, JetBrains Rider, GitHub, RESTful APIs, Aws, Figma, WordPress, Adobe Creative Suite, MS Office Suite</li>
              <li>Soft skills: teamwork, communication, problem-solving, critical thinking, adaptability, attention to detail, dedication, resilience</li>
              <li>Design Skills: UX/UI Design, typography, animation, printmaking, color theory, layout and logo design</li>
              <li>Languages: Portuguese, English</li>
            </ul>
          </section>
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