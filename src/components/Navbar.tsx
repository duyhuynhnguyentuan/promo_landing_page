import styles from "./navbar.module.css"
import {motion} from "framer-motion"
const Navbar = () => {
  const animationNavbar = {
    hidden: {
      opacity: 0,
    }, 
    visible:{
      opacity:1,
      transition:{
        delayChildren: 2,
        staggerChildren: 0.4
      }
    }
  };
  const animationNavItem = {
    hidden:{
      opacity: 0,
      y: -20,
    },
    visible:{
      opacity:1,
      y:0,
      transition:{
        ease: "easeIn",
        duration: 0.2,
      }
    }
  };
  const animationLogo = {
    hidden:{
      scale: 1.4,
      opacity:0
    },
    visible:{
      scale:1,
      opacity:1,
      rotate: "360deg",
      transition:{
        delay:1.2,
        duration:1
      }
    }
  };
  const containerNav = {
    hidden:{opacity:0},
    visible:{opacity:1,
    transition:{
      delay: 1.2,
    }
    }
  }

  return (
    <div className={styles.navbar}>
    <motion.nav className={styles.nav}
    variants={containerNav}
    initial="hidden"
    animate="visible"
    >
        <div className={styles.logo}>
            <motion.img src="./images/DUY HUYNH.png" alt="logo" className={styles.logoImg}
            variants={animationLogo}
            initial="hidden"
            animate="visible"
            />
        </div>
        <motion.ul className={styles.navMenu}
        variants={animationNavbar}
        initial="hidden"
        animate="visible"
        >
            <motion.li className={styles.navItem}
            variants={animationNavItem}
            ><a href="#">Home</a></motion.li>
            <motion.li className={styles.navItem}
               variants={animationNavItem}><a href="#">Product</a></motion.li>
            <motion.li className={styles.navItem}
               variants={animationNavItem}
            ><a href="#">About</a></motion.li>
        </motion.ul>
    </motion.nav>
    </div>
    
  )
}

export default Navbar