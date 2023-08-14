import styles from "./content.module.css";

const Content = () => {
  return (
    <div className={styles.container}>
        <div className={styles.imgLogo}>
            <img
            src="https://logos-world.net/wp-content/uploads/2020/12/Fender-Logo.png"
            alt="fender's logo"
            className={styles.fenderLogo}
            />
        </div>
      <div className={styles.mainContent}>
        <div>
            <h1>Fender <br/>
            Jazzmaster
            </h1>
        </div>
        <div className={styles.fenderguitarContainer}>
            <img src="https://i.pinimg.com/originals/1d/1e/58/1d1e581df54d1defee522c3cb2bc7aee.png" alt="fenderguitar"
            className={styles.fenderguitar}
             />
        </div>
      </div>
    </div>
  );
};

export default Content;
