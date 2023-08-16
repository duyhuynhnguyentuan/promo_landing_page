import styles from "./content.module.css";
import {motion} from 'framer-motion'
const Content = () => {
  const animationContent = {
    hidden:{
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition : {
        staggerChildren: 0.6
    }
  }
};
const animationTitle ={
  hidden:{
    opacity: 0,
    y: -100,
  },
  visible:{
    opacity: 1,
    y:0 ,
    transition:{
      type: "spring",
      stiffness: 100,
    }

  }
};
const animationGuitar= {
  hidden:{
    opacity: 0,
    x:200
  },
  visible: {
    opacity: 1,
    x:0,
    transition:{
      type: "spring",
      stiffness: 100,
    }
  }
}
  return (
    <div className={styles.container}>
        <div className={styles.imgLogo}>
            <img
            src="https://logos-world.net/wp-content/uploads/2020/12/Fender-Logo.png"
            alt="fender's logo"
            className={styles.fenderLogo}
            />
        </div>
      <motion.div className={styles.mainContent} 
      variants={animationContent}
      initial="hidden"
      animate="visible"
      >
        <motion.div variants={animationTitle}>
            <h1>Fender <br/>
            Jazzmaster
            </h1>
        </motion.div>
        <motion.div className={styles.
        fenderguitarContainer
        }
        variants={animationGuitar}
        >
            <img src="https://i.pinimg.com/originals/1d/1e/58/1d1e581df54d1defee522c3cb2bc7aee.png" alt="fenderguitar"
            className={styles.fenderguitar}
             />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Content;
