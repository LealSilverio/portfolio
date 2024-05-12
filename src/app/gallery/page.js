import Image from "next/image";
import styles from "./gallery.module.css";
import Project from "./Project";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"]});

const devProjects = [
  { src: '/placeholder.png', alt: 'Image 1', description: 'This is my project' },
  { src: '/placeholder.png', alt: 'Image 2', description: 'This is my project' },
  { src: '/placeholder.png', alt: 'Image 3', description: 'This is my project' },
]

const artProjects = [
  { src: '/placeholder.png', alt: 'Image 1', description: 'This is my project' },
  { src: '/placeholder.png', alt: 'Image 2', description: 'This is my project' },
  { src: '/placeholder.png', alt: 'Image 3', description: 'This is my project' },
]

export default function Gallery() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <section className={styles.grid}>
          {devProjects.map((project, index) => (
          <section key={index} className={styles.grid_item}>
            <Image src={project.src} alt={project.alt} width={200} height={200} />
            <p>{project.description}</p>
            <Project projects={devProjects}/>
        </section>
        
      ))}
        </section>
        <section className={styles.middle}>
        <p className={inter.className}>Design <span>-&gt;</span></p>
        <Image
          className={styles.logo}
          src="/goldRose.svg"
          alt="Rose Logo"
          width={240}
          height={300}
          priority
        />
        <p className={inter.className}><span>&lt;-</span> Development</p>
        </section>
        
        <section className={styles.grid}>
        {artProjects.map((project, index) => (
        <div key={index} className={styles.grid_item}>
          <Image src={project.src} alt={project.alt} width={200} height={200} />
          <p>{project.description}</p>
        </div>
      ))}
        </section>
      </main>

      <footer className={styles.footer}>
        <p>Created by Sara Leal Silverio</p>
    </footer>
    </div>   
  );
}