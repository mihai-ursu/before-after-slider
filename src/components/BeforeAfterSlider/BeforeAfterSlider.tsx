import styles from "./BeforeAfterSlider.module.scss";
import data from "data/data";
import Image from "next/image";
import combineClasses from "helpers/combineClasses";
import { useState } from "react";

const BeforeAfterSlider = () => {
  const [sliderValue, setSliderValue] = useState(50);
  const beforeImage = data.beforeImage;
  const afterImage = data.afterImage;

  return (
    <section className={styles.wrapper}>
      <div className={styles.sliderWrapper}>
        <div
          className={combineClasses(styles.imageWrapper, styles.before)}
          style={{ width: `${sliderValue}%` }}
        >
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

        <div
          className={styles.sliderButton}
          style={{ left: `calc(${sliderValue}% - 18px)` }}
        />
        <input
          type="range"
          min="1"
          max="100"
          value={sliderValue}
          className={styles.slider}
          onChange={(e) => setSliderValue(parseInt(e.target.value))}
          name="slider"
        />
      </div>
    </section>
  );
};

export default BeforeAfterSlider;
