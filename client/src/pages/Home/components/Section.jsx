import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Section.module.css";

const Section = (props) => {
  console.log(props);
  const [activeCard, setActiveCard] = useState(Math.floor(Math.random() * 5));
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard(activeCard === 4 ? 0 : activeCard + 1);
    }, 10000);
    return () => clearInterval(interval);
  }, [activeCard]);
  return (
    <div className={styles.section}>
      <div className={styles.section__slider}>
        <div className={styles.section__banner}>
          <div
            className={styles.banner__img}
            style={
              props.content[0].type === 2
                ? {
                    backgroundImage: `url(${props.content[activeCard].bannerImg})`,
                    marginRight: "24%",
                  }
                : {
                    backgroundImage: `url(${props.content[activeCard].bannerImg})`,
                    marginLeft: "24%",
                  }
            }
          ></div>
          <div
            className={styles.banner__overlay_1}
            style={
              props.content[0].type === 2
                ? {
                    background:
                      "linear-gradient(270deg, #171717 24%, rgba(0, 0, 0, 0) 100%)",
                  }
                : {
                    background:
                      "linear-gradient(90deg, #171717 24%, rgba(0, 0, 0, 0) 100%)",
                  }
            }
          ></div>
          <div className={styles.banner__overlay_2}></div>
          <div className="container">
            <div
              className={styles.section__text}
              style={
                props.content[0].type === 2
                  ? { right: 0, textAlign: "right" }
                  : {}
              }
            >
              <h1 className={styles.section__title}>
                {props.content[activeCard].title}
              </h1>
              <div className={styles.section__date}>
                {props.content[activeCard].date}
                {props.content[activeCard].seasons &&
                  ` (${props.content[activeCard].seasons} сезона)`}{" "}
                - {props.content[activeCard].genre}
              </div>
              <div className={styles.section__description}>
                {props.content[activeCard].description.length > 520
                  ? props.content[activeCard].description.slice(1, 520) +
                    "..."
                  : props.content[activeCard].description}
              </div>
            </div>
            <Link
              to={"/"}
              className={styles.section__button}
              style={
                props.content[0].type === 2 ? { left: "0" } : { right: "0" }
              }
            >
              СМОТРЕТЬ
            </Link>
          </div>
        </div>
        <div className="container">
          <div className={styles.section__cards}>
            {/* <h1 className={styles.section__cards_title}>НОВЫЕ ФИЛЬМЫ</h1> */}
            <div className={styles.section__cards_wrapper}>
              {props.content.map((card, i) => {
                return (
                  <div
                    className={
                      i === activeCard
                        ? `${styles.section__card} ${styles.active}`
                        : `${styles.section__card}`
                    }
                    style={{ backgroundImage: `url(${card.posterImg})` }}
                    onClick={() => setActiveCard(i)}
                  ></div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
