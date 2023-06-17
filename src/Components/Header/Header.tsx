import Button from '@mui/material/Button'
import styles from './Header.module.scss'
import { Link } from 'react-router-dom'


export default function Header() {
    return (
        <>
            <div className={styles.divHeader}>
                <h1>Logo</h1>
                <div className={styles.divHeader_Buttons}>
                    <Link to="/register">
                        <Button variant="contained" className={styles.divHeader_Button}>Cadastro</Button>
                    </Link>
                    <Link to="/entry">
                        <Button variant="contained" className={styles.divHeader_Button}>Entrar</Button>
                    </Link>
                </div>
            </div>
        </>
    )
}
