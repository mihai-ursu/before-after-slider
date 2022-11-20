import BeforeAfterSlider from "components/BeforeAfterSlider/BeforeAfterSlider";
import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.headline}>Before and after Slider</h1>
      <BeforeAfterSlider />
    </div>
  );
}
