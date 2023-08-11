import styles from "./navbar.module.css"
const Navbar = () => {
  return (
    <nav className={styles.nav}>
        <div className={styles.logo}></div>
        <ul className={styles.navMenu}>
            <li className={styles.navItem}>Home</li>
            <li className={styles.navItem}>Product</li>
            <li className={styles.navItem}>About</li>
        </ul>
    </nav>
    
  )
}

export default Navbar