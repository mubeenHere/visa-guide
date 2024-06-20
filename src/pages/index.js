import Ad from "@/components/Ad";
import styles from "../styles/mainpage.module.css";
export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.content}>
        <h1 className={styles.header}>
          How to Get a Study Visa for UAE: Read Detailed Guide Here
        </h1>
        <p className={styles.intro}>
          Embarking on an educational journey in the United Arab Emirates (UAE)
          can be an exciting and rewarding experience, offering world-class
          academic opportunities and a vibrant cultural setting. Whether you're
          aiming to enroll in a prestigious university in Dubai, Abu Dhabi, or
          any other emirate, securing a study visa is a crucial first step. This
          comprehensive guide will walk you through the entire process, from the
          initial application to arriving in the UAE. We'll cover essential
          requirements, necessary documentation, and provide valuable tips to
          ensure a smooth and successful visa application process. Read on to
          find out everything you need to know to start your academic adventure
          in the UAE.
        </p>
        <h1>Eligibility Requirements</h1>
        <p>Content here</p>
        <Ad />

        <h1>Required Documentation</h1>
        <p>Content here</p>
        <Ad />
        <h1>Application Process </h1>
        <p>Content here</p>
        <Ad />
        <h1>Frequently Asked Questions (FAQs) </h1>
        <p>Content here</p>
      </div>
      <div className={styles.ad}>
        <Ad vertical={true} />
        <Ad vertical={true} />
      </div>
    </div>
  );
}
