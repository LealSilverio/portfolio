import styles from './resume.module.css';

const Experience = () => { 
    return (
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
    ) 
};

export default Experience;