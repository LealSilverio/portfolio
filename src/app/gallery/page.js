import Image from "next/image";
import styles from "./gallery.module.css";

const images = [
  { src: '/placeholder.png', alt: 'Image 1' },
  { src: '/placeholder.png', alt: 'Image 2' },
  { src: '/placeholder.png', alt: 'Image 3' },
]

export default function Gallery() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.grid}>
        {images.map((image, index) => (
          <div key={index} className="grid-item">
            <Image src={image.src} alt={image.alt} width={200} height={200} />
          </div>
        ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <p>Created by Sara Leal Silverio</p>
    </footer>
    </div>   
  );
}