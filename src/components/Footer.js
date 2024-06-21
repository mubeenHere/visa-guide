import Image from "next/image";
import logo from "../../public/logo.png";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.logo}>
        <Image src={logo} alt="logo" width={200} />
        <h2>Study Work Visa Guide</h2>
      </div>
      <div className={styles.visa}>
        <p>Study Visa</p>
        <div>
          {Array(20)
            .fill()
            .map((x) => (
              <p className={styles.country}>Pakistan</p>
            ))}
        </div>
        <p>Work Visa</p>
        <div>
          {Array(20)
            .fill()
            .map((x) => (
              <p className={styles.country}>Pakistan</p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
