import styles from "./BeforeAfterSlider.module.scss";
import data from "data/data";
import Image from "next/image";
import combineClasses from "helpers/combineClasses";

const BeforeAfterSlider = () => {
  const beforeImage = data.beforeImage;
  const afterImage = data.afterImage;

  return (
    <section className={styles.wrapper}>
      <div className={styles.slider}>
        <div className={combineClasses(styles.imageWrapper, styles.before)}>
          <Image
            src={beforeImage.src}
            alt={beforeImage.name}
            className={styles.image}
            fill
          />
        </div>
        <div className={combineClasses(styles.imageWrapper, styles.after)}>
          <Image
            src={afterImage.src}
            alt={afterImage.name}
            className={styles.image}
            fill
          />
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterSlider;
