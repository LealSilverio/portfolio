import SkillChart from './SkillChart';
import styles from './resume.module.css';
import Image from 'next/image';

const Skills = () => { 
    return (
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
                {/* <SkillChart/> */}
            <h3>Additional Skills</h3>
            <ul>
                <li>Frameworks: .NET, React, Svelte, Sass, Node.js, Next.js, Express.js</li>
                <li>Tolls: Visual Studio Code, Visual Studio, JetBrains Rider, GitHub, RESTful APIs, Aws, Figma, WordPress, Adobe Creative Suite, MS Office Suite</li>
                <li>Soft skills: teamwork, communication, problem-solving, critical thinking, adaptability, attention to detail, dedication, resilience</li>
                <li>Design Skills: UX/UI Design, typography, animation, printmaking, color theory, layout and logo design</li>
                <li>Languages: Portuguese, English</li>
            </ul>
        </section>
    ) 
};

export default Skills;