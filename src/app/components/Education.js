import styles from './resume.module.css';

const Education = () => { 
    return (
        <section className={styles.education}>
        <h2>Education</h2>
        <h3>Software Engineering Bachelor |<i>Brigham Young University - Idaho</i> </h3>
        <ul>
            <li>Minor in Web Development</li>
            <li>Relevant Coursework: Backend Development, Frontend Development, Web Services, Advanced CSS, Database Design and Development, Programming with Data Structures, Technical Teamwork</li>
        </ul>
        <h3>Graphic Design Associates | <i>Brightpoint Community College</i> </h3>
        <ul>
            <li>Relevant Coursework: Graphic Design, Adobe InDesign, Photoshop, and Illustrator, Typography</li>
        </ul>
    </section>
    ) 
};

export default Education;