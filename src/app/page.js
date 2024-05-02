import Image from "next/image";
import Link from "next/link";
import { Macondo, Inter } from "next/font/google";
import styles from "./page.module.css";

const macondo = Macondo({ subsets: ["latin"], weight: ['400']});
const inter = Inter({ subsets: ["latin"]});

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
      
        <Image
          className={styles.logo}
          src="/rose.svg"
          alt="Rose Logo"
          width={240}
          height={300}
          priority
        />
      
      <div className={styles.main_container}>
        <div className={styles.description}>
          <h1 className={macondo.className}> Sara Leal Silverio </h1>
          <p> I&#39;m a Software Engineer, Web Developer, and Graphic Designer</p>
        </div>   

        <div className={styles.grid}>
          <Link
            href="/gallery"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>Gallery <span>-&gt;</span></h2>
          </Link>
        
      
          <Link
            href="/resume"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2 className={inter.className}>Resume <span>-&gt;</span></h2>
          </Link>
        </div>
      </div>
    </main>

    <footer className={styles.footer}>
      <p>Created by Sara Leal Silverio</p>
    </footer>
    </div>
  );
}
