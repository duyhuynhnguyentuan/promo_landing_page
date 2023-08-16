import styles from './footer.module.css';
import {FiFacebook, FiInstagram, FiTwitter} from "react-icons/fi"
import {motion} from 'framer-motion'

const Footer = () => {
    const date=new Date();
    const animationFooter ={
        hidden: {
            opacity: 0
        },
        visible:{
            opacity: 1,
            transition:{
                delay:2
            }
        }
    }
  return (
    <motion.div className={styles.footerContainer}
    variants={animationFooter}
    initial="hidden"
    animate="visible"
    >
        <div className={styles.footer}>

        <div className={styles.copy}>
            <p>&copy;{date.getFullYear()} Duy Huynh | All right reserved</p>
        </div>
        <div className={styles.logoContainer}>
        <a href='#' className={styles.icon}>
        <FiFacebook/>
        </a>
        <a href='#'  className={styles.icon}>
        <FiInstagram/>
        </a>
        <a href='#'  className={styles.icon}>
        <FiTwitter/>
        </a>
        </div>

        </div>
    </motion.div>
  )
}

export default Footer