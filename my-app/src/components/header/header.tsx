import styles from './header.module.css'
import icon from '../../assets/appicon@4x.png'
import Login from '../../login/Login.tsx'

function Header() {
    return(
        <header className={styles.header}>
            <div className={styles.container}>
                <img src={icon}></img>
                <h1 className={styles.title}>솔루션 등록 페이지</h1>
            </div>
            <Login />
        </header>
    )
}
export default Header;