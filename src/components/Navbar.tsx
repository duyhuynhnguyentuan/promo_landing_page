import styles from "./navbar.module.css"
const Navbar = () => {
  return (
    <div className={styles.navbar}>
    <nav className={styles.nav}>
        <div className={styles.logo}>
            <img src="./images/DUY HUYNH.png" alt="logo" className={styles.logoImg}/>
        </div>
        <ul className={styles.navMenu}>
            <li className={styles.navItem}><a href="#">Home</a></li>
            <li className={styles.navItem}><a href="#">Product</a></li>
            <li className={styles.navItem}><a href="#">About</a></li>
        </ul>
    </nav>
    </div>
    
  )
}

export default Navbar